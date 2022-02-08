import { Menu } from '../ts/types';
import { MENU_ITEMS } from '../constants/menuItems';

function makeItemList(options: Menu.MenuItem[], depth = 0): Menu.ItemList[] {
  return options.map((option, idx) => ({
    ...option,
    id: `${depth}.${idx}`,
    depth,
    subItems: option.subItems
      ? makeItemList(option.subItems, depth + 1)
      : undefined,
  }));
}

export const ITEM_LIST: Menu.ItemList[] = makeItemList(MENU_ITEMS);
