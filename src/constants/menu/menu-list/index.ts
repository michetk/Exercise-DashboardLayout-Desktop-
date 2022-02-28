import { MenuItem, MenuList } from '../types';
import { MENU_ITEMS } from '@/constants/menu/menu-item';

function generateMenuList(menuItem: MenuItem[], depth = 0): MenuList[] {
  return menuItem.map((item, idx) => ({
    ...item,
    id: `${depth}.${idx}`,
    depth,
    subItems: item.subItems
      ? generateMenuList(item.subItems, depth + 1)
      : undefined,
  }));
}

export const ITEM_LIST = generateMenuList(MENU_ITEMS);
