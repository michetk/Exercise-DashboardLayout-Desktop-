import { ComponentType } from 'react';

export type MenuItem = {
  name: string;
  icon: ComponentType;
  url: string;
  subItems?: MenuItem[];
};

export type MenuList = MenuItem & {
  id: string;
  depth: number;
  subItems?: MenuList[];
};
