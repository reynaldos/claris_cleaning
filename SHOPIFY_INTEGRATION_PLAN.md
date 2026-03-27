# Shopify Integration Plan - Email Notifications & Order Fulfillment

## Current Date: December 2, 2025

---

## Context & Background

### What We Built So Far

The Clari's Cleaning Crew website currently has:

1. **E-commerce Shop** (`/shop`)
   - 9 cleaning products with FPO data
   - Stripe checkout integration (working)
   - Shopping cart with localStorage persistence
   - Product detail pages
   - Order success page

2. **Admin Panel** (`/admin`)
   - Password-protected (username: `demo_user`, password: `Password123`)
   - JWT authentication with sessionStorage
   - View all orders in a table
   - **12 FPO (mock) orders** stored in `/src/constants/mockOrders.ts`
   - "Mark as Shipped" button (currently only updates mock data status)
   - No database - all data is in-memory/mock

3. **Current Tech Stack**
   - Next.js 14 (App Router)
   - TypeScript
   - Styled Components
   - Stripe for payments
   - EmailJS for contact forms
   - react-hook-form
   - No database/Prisma yet

### The Problem

Currently, when clicking "Mark as Shipped" in the admin panel:
- It only updates the in-memory mock order status
- **No email notifications are sent to customers**
- Customers have no way to know their order shipped
- No tracking information system

### What the User Wants

User showed two example screenshots of professional shipping emails:

**Screenshot 1:** "One item in your order is on the way"
- Order number displayed
- UPS tracking number: 1Z447790YW28392610
- "View your order" button
- Items in shipment list
- Professional email template

**Screenshot 2:** "The last item in your order has been delivered"
- Delivery confirmation
- Same tracking number
- "Haven't received your package?" support option

**User's question:** "how does the 'mark as shipped' work? will this notify users that the order has been shipped? also when an item is delivered? how do i do this"

---

## User's Proposed Solution

User provided a detailed plan to integrate **Shopify as a back-office system** for handling:
- Product sync
- Order mirroring
- **Shipping notifications (via Shopify's built-in emails)**
- Fulfillment tracking

### High-Level Architecture (from user's plan)

```
┌─────────────────┐         ┌──────────────┐         ┌──────────────┐
│  My Next.js App │────────▶│   Stripe     │         │   Shopify    │
│  (Frontend)     │         │  (Payments)  │         │  (Back-office)│
└─────────────────┘         └──────────────┘         └──────────────┘
        │                           │                        ▲
        │                           │                        │
        ▼                           ▼                        │
┌─────────────────┐         ┌──────────────┐                │
│  My Database    │────────▶│  My Backend  │────────────────┘
│  (Prisma+PG)    │         │  (API Routes)│   Shopify Admin API
│  Source of Truth│         └──────────────┘   (Product/Order sync
└─────────────────┘                             + Fulfillment)
```

**Key Points:**
- My DB is source of truth
- Shopify mirrors products and orders
- Shopify handles shipping emails (notify_customer: true)
- Admin panel triggers Shopify fulfillment API

---

## Detailed Integration Plan (User Provided)

### 1. Products & Inventory
- App owns all product data (DB is source of truth)
- On create/update of products in admin → push/sync to Shopify via Admin API
- Store Shopify IDs in DB to link back

### 2. Orders
- Customers check out via Stripe (already working)
- After successful Stripe payment:
  - Create/update Order in DB
  - Create corresponding Shopify order via Admin API
  - Store `shopify_order_id` in DB

### 3. Fulfillment & Notifications ⭐ (MAIN GOAL)
- In admin panel "Order Detail" view: "Mark as Fulfilled" button
- When clicked:
  - Backend calls **Shopify Fulfillment API**
  - Pass `notify_customer: true` → **Shopify sends shipping email**
  - Pass tracking details (carrier, tracking number, URL)
  - Update local order status to FULFILLED
  - Store Shopify fulfillment data

### 4. Technical Approach
- Use Shopify Admin REST API (or GraphQL)
- Private access token (custom app, no OAuth needed)
- Server-to-server calls from backend

---

## Required Changes

### Database Setup (Phase 1)

**Need to set up:**
- Prisma ORM
- PostgreSQL database (or SQLite for development)

**Prisma Schema Updates (from user's spec):**

```prisma
model Product {
  id                String   @id @default(cuid())
  name              String
  description       String?
  priceCents        Int
  active            Boolean  @default(true)
  shopifyProductId  String?  @unique
  shopifyHandle     String?
  variants          ProductVariant[]
}

model ProductVariant {
  id                 String   @id @default(cuid())
  productId          String
  product            Product  @relation(fields: [productId], references: [id])
  sku                String?
  priceCents         Int
  shopifyVariantId   String?  @unique
}

model Order {
  id                String           @id @default(cuid())
  stripePaymentId   String?          @unique
  email             String
  totalCents        Int
  status            OrderStatus      @default(PENDING)
  createdAt         DateTime         @default(now())
  updatedAt         DateTime         @updatedAt

  shopifyOrderId    String?          @unique
  shopifyOrderName  String?          // e.g. "#1001"

  lineItems         OrderLineItem[]
  fulfillments      Fulfillment[]
}

model OrderLineItem {
  id                 String   @id @default(cuid())
  orderId            String
  order              Order    @relation(fields: [orderId], references: [id])
  productVariantId   String
  productVariant     ProductVariant @relation(fields: [productVariantId], references: [id])

  quantity           Int
  unitPriceCents     Int

  shopifyLineItemId  String?    @unique
}

model Fulfillment {
  id                    String    @id @default(cuid())
  orderId               String
  order                 Order     @relation(fields: [orderId], references: [id])

  status                FulfillmentStatus @default(PENDING)
  trackingCompany       String?
  trackingNumber        String?
  trackingUrl           String?

  shopifyFulfillmentId  String?   @unique

  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt
}

enum OrderStatus {
  PENDING
  PAID
  FULFILLED
  CANCELLED
}

enum FulfillmentStatus {
  PENDING
  FULFILLED
  CANCELLED
}
```

### Code Structure (from user's spec)

**New files to create:**

1. `/lib/shopify.ts` - Shopify Admin API client
   - Base fetch wrapper with auth headers
   - Helper functions for products, orders, fulfillments

2. `/lib/shopify-sync.ts` - High-level sync logic
   - `syncProductToShopify(productId: string)`
   - `createShopifyOrder(order, customerInfo)`
   - `createShopifyFulfillment(args)`

3. **API Routes:**
   - `POST /api/shopify/sync-product` - Sync product to Shopify
   - `POST /api/stripe/webhook` - Handle Stripe payments → create Shopify order
   - `POST /api/orders/[orderId]/fulfill` - Mark as fulfilled + send email

### Environment Variables Needed

```env
# Shopify Credentials (need to set up)
SHOPIFY_STORE_DOMAIN=yourstore.myshopify.com
SHOPIFY_ADMIN_ACCESS_TOKEN=shpat_xxxxxxxxxxxxx
SHOPIFY_API_VERSION=2024-04

# Existing
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
JWT_SECRET=your-secret-key
```

---

## Implementation Phases

### Phase 1: Quick Win - Shopify Fulfillment Only (1-2 hours)
**Goal:** Send shipping emails without full database migration

**Steps:**
1. Keep mock orders for now
2. Add Shopify fulfillment API integration
3. Update "Mark as Shipped" to call Shopify API
4. Add tracking number input field in admin
5. Shopify sends real emails to customers

**Pros:**
- Quick to implement
- Solves immediate problem (email notifications)
- Can test Shopify integration without database

**Cons:**
- Still using mock data
- Orders aren't persisted from Stripe
- Not production-ready

### Phase 2: Database Foundation (3-4 hours)
**Goal:** Production-ready order management

**Steps:**
1. Set up Prisma + PostgreSQL (or SQLite)
2. Implement Prisma schema (above)
3. Migrate mock orders to database
4. Create real orders from Stripe checkout
5. Stripe webhook → DB + Shopify order creation

**Pros:**
- Production-ready
- Real order persistence
- Can scale

**Cons:**
- More complex setup
- Database hosting needed (for production)

### Phase 3: Full Product Sync (2-3 hours)
**Goal:** Complete Shopify integration

**Steps:**
1. Add product CRUD in admin
2. Sync products to Shopify on create/update
3. Store Shopify product/variant IDs
4. Inventory management
5. Optional: Two-way sync (Shopify → DB)

---

## Questions to Answer Before Starting

### 1. Database Choice
**Question:** Do you want to use Prisma + PostgreSQL as planned, or something else?

**Options:**
- **Option A:** Prisma + PostgreSQL (user's original plan)
  - Pros: Production-ready, scalable, user's preferred stack
  - Cons: Need to set up Postgres (locally or cloud)

- **Option B:** Prisma + SQLite (development)
  - Pros: No external DB needed, easy local dev
  - Cons: Need to migrate to Postgres for production

- **Option C:** Skip database, use JSON file storage
  - Pros: Quick, no setup
  - Cons: Not production-ready

**User should choose:** A, B, or C

### 2. Implementation Phase
**Question:** Which phase do you want to start with?

**Options:**
- **Phase 1 Only:** Quick Shopify fulfillment (keep mock data)
- **Phase 2 First:** Set up database, then add Shopify
- **Full Implementation:** All phases at once (4-6 hours total)

**User should choose:** Phase 1, Phase 2, or Full

### 3. Shopify Store Setup
**Question:** Do you have a Shopify store already?

**If NO:**
- Need to create Shopify Partner account
- Set up development store
- Create custom app for API access

**If YES:**
- Need to create custom app
- Get Admin API access token
- Configure app permissions

**User should provide:**
- [ ] Shopify store URL
- [ ] Admin API access token
- [ ] OR indicate "need help setting up Shopify"

### 4. Tracking Information
**Question:** How do you want to input tracking details?

**Options:**
- **Option A:** Manual input in admin when clicking "Mark as Shipped"
  - Add form fields: carrier, tracking number, URL

- **Option B:** Integrate with shipping provider API
  - EasyPost, ShipStation, etc.
  - Auto-generate tracking

- **Option C:** Just send notification, no tracking yet

**User should choose:** A, B, or C

### 5. Order Status Flow
**Question:** Do you want a "Delivered" status too?

**Current plan:** `PENDING → PAID → FULFILLED`

**Options:**
- Keep as-is (3 statuses)
- Add `DELIVERED` status (4 statuses)
- Add more: `PENDING → PAID → PROCESSING → SHIPPED → DELIVERED → CANCELLED`

**User should choose:** Status flow preference

---

## Current Code State

### Admin Panel Files

**Authentication:**
- `/src/types/admin.ts` - TypeScript types
- `/src/utils/adminAuth.ts` - sessionStorage helpers
- `/src/hooks/useAdminAuth.ts` - Auth hook
- `/src/app/api/admin/auth/route.ts` - Login API
- `/src/components/Admin/LoginForm/` - Login UI

**Orders Management:**
- `/src/constants/mockOrders.ts` - 12 FPO orders
- `/src/app/api/admin/orders/route.ts` - GET orders API
- `/src/app/api/admin/orders/[id]/route.ts` - PATCH update status
- `/src/components/Admin/OrdersTable/` - Orders list
- `/src/components/Admin/OrderRow/` - Individual order row
- `/src/components/Admin/StatusBadge/` - Status indicator

**Admin Page:**
- `/src/app/admin/page.tsx` - Main admin dashboard
- `/src/app/admin/layout.tsx` - Admin layout (no navbar)

### Shop Files

**Products:**
- `/src/constants/products.ts` - 9 cleaning products (FPO)
- `/src/types/shop.ts` - Shop TypeScript types

**Cart & Checkout:**
- `/src/context/CartContext.tsx` - Cart state management
- `/src/components/Cart/` - Cart sidebar
- `/src/app/api/checkout/route.ts` - Stripe checkout API
- `/src/app/shop/success/page.tsx` - Order confirmation

---

## Shopify API Reference

### Endpoints Needed

**Products:**
- `POST /admin/api/2024-04/products.json` - Create product
- `PUT /admin/api/2024-04/products/{id}.json` - Update product

**Orders:**
- `POST /admin/api/2024-04/orders.json` - Create order

**Fulfillments:**
- `POST /admin/api/2024-04/orders/{id}/fulfillments.json` - Create fulfillment

### Example Fulfillment Request

```json
POST /admin/api/2024-04/orders/{order_id}/fulfillments.json

{
  "fulfillment": {
    "line_items": [
      {
        "id": 123456789,
        "quantity": 2
      }
    ],
    "tracking_company": "UPS",
    "tracking_number": "1Z447790YW28392610",
    "tracking_url": "https://www.ups.com/track?tracknum=1Z447790YW28392610",
    "notify_customer": true
  }
}
```

**Key field:** `"notify_customer": true` → Shopify sends email

---

## Next Steps for Implementation

### When You Return to This

1. **Read this entire document**
2. **Answer the 5 questions above** (Database, Phase, Shopify, Tracking, Status)
3. **Provide Shopify credentials** (or indicate need help setting up)
4. **Claude will then:**
   - Implement chosen phase
   - Set up database if needed
   - Create Shopify integration files
   - Update admin panel UI
   - Test fulfillment email flow

### Testing Plan

Once implemented:
1. Navigate to `/admin`
2. Login with `demo_user` / `Password123`
3. View an order
4. Click "Mark as Shipped"
5. Enter tracking details (if Phase 1+)
6. Confirm action
7. **Customer receives Shopify email** with tracking info
8. Order status updates to "Fulfilled"

---

## Important Notes

### Security Considerations
- Shopify access token is sensitive - never commit to git
- Use environment variables
- Admin panel already has JWT auth (good)

### Email Deliverability
- Shopify handles email sending (reliable)
- Branded as your store name
- Professional templates
- Tracking links included
- No email server setup needed

### Cost Considerations
- Shopify Basic plan: ~$29/month
- Includes unlimited products/orders
- Email notifications included
- Can start with free development store

### Alternative: Skip Shopify

If you want emails without Shopify:
- Use SendGrid/Resend/Postmark directly
- More control over email templates
- But need to build email infrastructure
- Shopify approach is faster and more robust

---

## Files to Reference

When implementing, refer to:
- This plan document
- User's original prompt (included above)
- Existing admin panel code structure
- Current Stripe integration in `/src/app/api/checkout/route.ts`

---

## Summary

**Current state:** Working admin panel with mock orders, "Mark as Shipped" button that only updates local status

**User wants:** Professional shipping notification emails (like screenshots shown)

**Proposed solution:** Integrate Shopify Admin API for fulfillment + email notifications

**Blocker:** Need to answer 5 questions above to proceed with implementation

**Time estimate:**
- Phase 1 only: 1-2 hours
- Phase 2 (with DB): 3-4 hours
- Full implementation: 4-6 hours

---

**Created:** December 2, 2025
**Status:** Awaiting user decisions on implementation approach
**Next:** User to answer questions, then Claude can implement
