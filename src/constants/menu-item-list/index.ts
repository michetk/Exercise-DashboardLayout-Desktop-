import { MenuItemList } from './types';
import { MenuItem } from '../menu-item/types';
import { MENU_ITEMS } from '@/constants/menu-item';

function makeItemList(options: MenuItem[], depth = 0): MenuItemList[] {
  return options.map((option, idx) => ({
    ...option,
    id: `${depth}.${idx}`,
    depth,
    subItems: option.subItems
      ? makeItemList(option.subItems, depth + 1)
      : undefined,
  }));
}

export const ITEM_LIST = makeItemList(MENU_ITEMS);
