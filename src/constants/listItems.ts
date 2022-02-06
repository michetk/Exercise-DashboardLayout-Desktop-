import React from 'react';
import { MENU_ITEMS, MenuItem as MenuItemType } from './menuItems';

type ItemList = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: ItemList[];
};

function makeItemList(options: MenuItemType[], depth = 0): ItemList[] {
  return options.map((option, idx) => ({
    ...option,
    id: `${depth}.${idx}`,
    depth,
    subItems: option.subItems
      ? makeItemList(option.subItems, depth + 1)
      : undefined,
  }));
}

export const ITEM_LIST: ItemList[] = makeItemList(MENU_ITEMS);
