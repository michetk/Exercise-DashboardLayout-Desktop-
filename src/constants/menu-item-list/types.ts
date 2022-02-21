import { ComponentType } from 'react';

export type MenuItemList = {
  name: string;
  icon: ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItemList[];
};
