<div align="center">
  <img alt="Clari's Cleaning Crew Logo" src="https://www.clariscleaning.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fccc_logo.6fb42b9e.webp&w=640&q=100" width="300" />
</div>

<h1 align="center">
  Clari's Cleaning Crew
</h1>

<p align="center">
  A modern, full-featured cleaning services website with integrated e-commerce capabilities. Built with Next.js 14, TypeScript, and Stripe.
</p>

<p align="center">
  <a href="https://www.clariscleaning.com" target="_blank">Live Site</a> •
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#tech-stack">Tech Stack</a>
</p>

![App Screenshot](https://www.clariscleaning.com/_next/static/media/share.0785a405.webp)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [E-Commerce Features](#e-commerce-features)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Core Features
- **Service Pages** - Residential, Commercial, and Construction cleaning services
- **Contact Forms** - Integrated with EmailJS for instant customer inquiries
- **Quote Request System** - Custom quote form with service selection
- **Fully Responsive** - Mobile-first design with optimized layouts
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Accessible** - WCAG compliant with semantic HTML

### E-Commerce Shop
- **Product Catalog** - Browse cleaning supplies and equipment
- **Shopping Cart** - Persistent cart with localStorage
- **Stripe Checkout** - Secure payment processing
- **Product Details** - Detailed product pages with quantity selection
- **Cart Badge** - Real-time cart count indicator
- **Mobile Cart** - Slide-in cart sidebar on all devices

### Performance & Analytics
- **Static Generation** - Pre-rendered pages for optimal performance
- **LogRocket Integration** - Session replay and error tracking
- **Google Analytics** - Traffic and conversion tracking
- **Optimized Images** - Next.js Image component with WebP format

---

## Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Styled Components 6](https://styled-components.com/)
- **UI Components**: Custom components with [React Icons](https://react-icons.github.io/react-icons/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Carousel**: [Swiper](https://swiperjs.com/)

### Backend & Services
- **Payments**: [Stripe](https://stripe.com/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **Analytics**: [Google Analytics](https://analytics.google.com/) via @next/third-parties
- **Monitoring**: [LogRocket](https://logrocket.com/)

### Development
- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **Deployment**: [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Stripe account (for e-commerce features)
- EmailJS account (for contact forms)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/claris_cleaning.git
   cd claris_cleaning
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```

   Then add your credentials (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID=your_quote_template_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_contact_template_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_LOGROCKET_ID=your_logrocket_id
```

### Getting API Keys

**Stripe:**
1. Sign up at [stripe.com](https://stripe.com)
2. Navigate to Developers → API keys
3. Copy your Publishable key and Secret key

**EmailJS:**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service and email template
3. Copy your Service ID, Public Key, and Template IDs

---

## Project Structure

```
claris_cleaning/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   └── checkout/      # Stripe checkout endpoint
│   │   ├── shop/              # E-commerce shop pages
│   │   │   ├── [productId]/   # Dynamic product pages
│   │   │   └── success/       # Order confirmation
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   └── free-quote/
│   ├── components/            # Reusable React components
│   │   ├── Buttons/
│   │   ├── Cart/              # Shopping cart components
│   │   ├── Forms/
│   │   ├── Navbar/
│   │   ├── ProductCard/
│   │   └── ...
│   ├── sections/              # Page-specific sections
│   │   ├── shopGrid/
│   │   ├── productDetail/
│   │   └── ...
│   ├── context/               # React Context providers
│   │   └── CartContext.tsx   # Shopping cart state
│   ├── constants/             # App constants and config
│   │   ├── products.ts        # Product catalog
│   │   ├── theme.ts           # Design system
│   │   └── info.ts            # Business info
│   ├── types/                 # TypeScript type definitions
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   └── assets/               # Images and static files
├── public/                    # Public static assets
├── .env.local                # Environment variables (gitignored)
└── next.config.js            # Next.js configuration
```

---

## Available Scripts

```bash
# Development
npm run dev          # Start development server at localhost:3000

# Production
npm run build        # Build optimized production bundle
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint checks
```

---

## E-Commerce Features

### Shopping Cart
- **Persistent Storage**: Cart data saved to localStorage
- **Real-time Updates**: Instant quantity adjustments and total calculations
- **Responsive Sidebar**: Slides in from the right on all devices
- **Mobile Optimization**: Cart icon appears next to hamburger menu

### Stripe Integration
- **Checkout Sessions**: Secure redirect to Stripe-hosted checkout
- **Shipping Options**: Standard and Express shipping
- **Order Confirmation**: Success page with order details
- **Test Mode**: Use test card `4242 4242 4242 4242` for development

### Product Management
Products are defined in `/src/constants/products.ts`. Each product includes:
- Name, description, and category
- Price (in cents for Stripe compatibility)
- Stock status
- Product images

---

## Deployment

### Deploying to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository

3. **Configure Environment Variables**
   - Add all variables from `.env.local`
   - Use production Stripe keys for live deployment

4. **Deploy**
   - Vercel will automatically build and deploy
   - Your site will be live at `your-project.vercel.app`

### Custom Domain
1. Add your domain in Vercel project settings
2. Update DNS records as instructed
3. Update `NEXT_PUBLIC_SITE_URL` environment variable

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is private and proprietary.

---

## Contact

**Clari's Cleaning Crew**
- Website: [clariscleaning.com](https://www.clariscleaning.com)
- Email: gabriel@clariscleaning.com
- Phone: (863) 808-7666

---

<p align="center">
  Built by <a href="https://reysanchez.dev" target="_blank">Rey Sanchez</a>
</p>
