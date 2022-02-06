import React from 'react';
import {
  Dashboard,
  ShoppingCart,
  People,
  AttachMoney,
  AddShoppingCart,
  Done,
  Business,
  HomeWork,
  Person,
} from '@styled-icons/material';

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuItem[];
};

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Dashboard',
    icon: Dashboard,
    url: '/',
  },
  {
    name: 'Orders',
    icon: ShoppingCart,
    url: '/orders',
    subItems: [
      {
        name: 'New',
        icon: AddShoppingCart,
        url: '/new-orders',
      },
      {
        name: 'Completed',
        icon: Done,
        url: '/completed-orders',
      },
    ],
  },
  {
    name: 'Customers',
    icon: People,
    url: '/customers',
    subItems: [
      {
        name: 'Corporate',
        icon: Business,
        url: '/corporate',
      },
      {
        name: 'SMB',
        icon: HomeWork,
        url: '/smb',
        subItems: [
          {
            name: 'Retail',
            icon: Person,
            url: '/retail',
          },
        ],
      },
    ],
  },
  {
    name: 'Inventory',
    icon: AttachMoney,
    url: '/inventory',
  },
];
