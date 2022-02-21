import { ComponentType } from 'react';

export type MenuItem = {
  name: string;
  icon: ComponentType;
  url: string;
  subItems?: MenuItem[];
};
