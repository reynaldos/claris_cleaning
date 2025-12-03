import { Order } from '@/types/admin';

export const MOCK_ORDERS: Order[] = [
  {
    id: 'cs_test_mock1',
    created: 1701234567,
    amount_total: 7598,
    currency: 'usd',
    customer_email: 'john.doe@example.com',
    customer_details: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890'
    },
    shipping_details: {
      name: 'John Doe',
      address: {
        line1: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        postal_code: '62701',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_1',
        description: 'All-Purpose Cleaner',
        quantity: 2,
        amount_total: 2598
      },
      {
        id: 'li_2',
        description: 'Glass Cleaner',
        quantity: 1,
        amount_total: 1299
      }
    ],
    payment_status: 'paid',
    status: 'pending'
  },
  {
    id: 'cs_test_mock2',
    created: 1701220000,
    amount_total: 12999,
    currency: 'usd',
    customer_email: 'jane.smith@example.com',
    customer_details: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1987654321'
    },
    shipping_details: {
      name: 'Jane Smith',
      address: {
        line1: '456 Oak Ave',
        city: 'Portland',
        state: 'OR',
        postal_code: '97201',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_3',
        description: 'Professional Cleaning Kit',
        quantity: 1,
        amount_total: 5999
      }
    ],
    payment_status: 'paid',
    status: 'shipped',
    shippedAt: 1701306967
  },
  {
    id: 'cs_test_mock3',
    created: 1701150000,
    amount_total: 4599,
    currency: 'usd',
    customer_email: 'michael.brown@example.com',
    customer_details: {
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      phone: '+1555123456'
    },
    shipping_details: {
      name: 'Michael Brown',
      address: {
        line1: '789 Pine Rd',
        city: 'Austin',
        state: 'TX',
        postal_code: '73301',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_4',
        description: 'Microfiber Cloths Bundle',
        quantity: 3,
        amount_total: 2997
      }
    ],
    payment_status: 'paid',
    status: 'pending'
  },
  {
    id: 'cs_test_mock4',
    created: 1701100000,
    amount_total: 8999,
    currency: 'usd',
    customer_email: 'sarah.wilson@example.com',
    customer_details: {
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '+1444555666'
    },
    shipping_details: {
      name: 'Sarah Wilson',
      address: {
        line1: '321 Elm St',
        line2: 'Apt 5B',
        city: 'Seattle',
        state: 'WA',
        postal_code: '98101',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_5',
        description: 'Floor Cleaner',
        quantity: 2,
        amount_total: 3998
      },
      {
        id: 'li_6',
        description: 'Disinfectant Spray',
        quantity: 1,
        amount_total: 1599
      }
    ],
    payment_status: 'paid',
    status: 'shipped',
    shippedAt: 1701186400
  },
  {
    id: 'cs_test_mock5',
    created: 1701050000,
    amount_total: 15999,
    currency: 'usd',
    customer_email: 'david.lee@example.com',
    customer_details: {
      name: 'David Lee',
      email: 'david.lee@example.com',
      phone: '+1333444555'
    },
    shipping_details: {
      name: 'David Lee',
      address: {
        line1: '654 Maple Dr',
        city: 'Denver',
        state: 'CO',
        postal_code: '80201',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_7',
        description: 'Commercial Vacuum Cleaner',
        quantity: 1,
        amount_total: 15999
      }
    ],
    payment_status: 'paid',
    status: 'pending'
  },
  {
    id: 'cs_test_mock6',
    created: 1701000000,
    amount_total: 5999,
    currency: 'usd',
    customer_email: 'emily.garcia@example.com',
    customer_details: {
      name: 'Emily Garcia',
      email: 'emily.garcia@example.com'
    },
    shipping_details: {
      name: 'Emily Garcia',
      address: {
        line1: '987 Cedar Ln',
        city: 'Miami',
        state: 'FL',
        postal_code: '33101',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_8',
        description: 'All-Purpose Cleaner',
        quantity: 1,
        amount_total: 1299
      },
      {
        id: 'li_9',
        description: 'Window Cleaning Kit',
        quantity: 2,
        amount_total: 2798
      }
    ],
    payment_status: 'paid',
    status: 'shipped',
    shippedAt: 1701086400
  },
  {
    id: 'cs_test_mock7',
    created: 1700950000,
    amount_total: 3499,
    currency: 'usd',
    customer_email: 'robert.martinez@example.com',
    customer_details: {
      name: 'Robert Martinez',
      email: 'robert.martinez@example.com',
      phone: '+1222333444'
    },
    shipping_details: {
      name: 'Robert Martinez',
      address: {
        line1: '147 Birch Ave',
        city: 'Phoenix',
        state: 'AZ',
        postal_code: '85001',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_10',
        description: 'Carpet Cleaner Solution',
        quantity: 2,
        amount_total: 3498
      }
    ],
    payment_status: 'paid',
    status: 'pending'
  },
  {
    id: 'cs_test_mock8',
    created: 1700900000,
    amount_total: 9999,
    currency: 'usd',
    customer_email: 'linda.taylor@example.com',
    customer_details: {
      name: 'Linda Taylor',
      email: 'linda.taylor@example.com',
      phone: '+1111222333'
    },
    shipping_details: {
      name: 'Linda Taylor',
      address: {
        line1: '258 Willow Way',
        city: 'Boston',
        state: 'MA',
        postal_code: '02101',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_11',
        description: 'Bathroom Cleaner Set',
        quantity: 3,
        amount_total: 5997
      },
      {
        id: 'li_12',
        description: 'Steel Polish',
        quantity: 1,
        amount_total: 1999
      }
    ],
    payment_status: 'paid',
    status: 'pending'
  },
  {
    id: 'cs_test_mock9',
    created: 1700850000,
    amount_total: 7299,
    currency: 'usd',
    customer_email: 'james.anderson@example.com',
    customer_details: {
      name: 'James Anderson',
      email: 'james.anderson@example.com',
      phone: '+1999888777'
    },
    shipping_details: {
      name: 'James Anderson',
      address: {
        line1: '369 Ash Blvd',
        city: 'Chicago',
        state: 'IL',
        postal_code: '60601',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_13',
        description: 'Eco-Friendly Cleaning Bundle',
        quantity: 1,
        amount_total: 5999
      }
    ],
    payment_status: 'paid',
    status: 'shipped',
    shippedAt: 1700936400
  },
  {
    id: 'cs_test_mock10',
    created: 1700800000,
    amount_total: 11999,
    currency: 'usd',
    customer_email: 'patricia.thomas@example.com',
    customer_details: {
      name: 'Patricia Thomas',
      email: 'patricia.thomas@example.com',
      phone: '+1888777666'
    },
    shipping_details: {
      name: 'Patricia Thomas',
      address: {
        line1: '741 Spruce St',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94101',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_14',
        description: 'Industrial Mop System',
        quantity: 1,
        amount_total: 7999
      },
      {
        id: 'li_15',
        description: 'Floor Polish',
        quantity: 2,
        amount_total: 3998
      }
    ],
    payment_status: 'paid',
    status: 'pending'
  },
  {
    id: 'cs_test_mock11',
    created: 1700750000,
    amount_total: 4299,
    currency: 'usd',
    customer_email: 'william.jackson@example.com',
    customer_details: {
      name: 'William Jackson',
      email: 'william.jackson@example.com'
    },
    shipping_details: {
      name: 'William Jackson',
      address: {
        line1: '852 Fir Ct',
        city: 'Atlanta',
        state: 'GA',
        postal_code: '30301',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_16',
        description: 'Sanitizer Wipes',
        quantity: 4,
        amount_total: 3996
      }
    ],
    payment_status: 'paid',
    status: 'shipped',
    shippedAt: 1700836400
  },
  {
    id: 'cs_test_mock12',
    created: 1700700000,
    amount_total: 18999,
    currency: 'usd',
    customer_email: 'jennifer.white@example.com',
    customer_details: {
      name: 'Jennifer White',
      email: 'jennifer.white@example.com',
      phone: '+1777666555'
    },
    shipping_details: {
      name: 'Jennifer White',
      address: {
        line1: '963 Poplar Pl',
        city: 'New York',
        state: 'NY',
        postal_code: '10001',
        country: 'US'
      }
    },
    line_items: [
      {
        id: 'li_17',
        description: 'Premium Cleaning Service Kit',
        quantity: 1,
        amount_total: 18999
      }
    ],
    payment_status: 'paid',
    status: 'pending'
  }
];
