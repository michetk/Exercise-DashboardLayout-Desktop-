import { Menu } from '../../ts/types';
import MenuItem from '../MenuItem/index';

interface MenuItemListProps {
  ItemList: Menu.ItemList[];
}

const MenuItemList = ({ ItemList }: MenuItemListProps) => (
  <div>
    {ItemList.map((option) => (
      <MenuItem menuItem={option} key={option.id} />
    ))}
  </div>
);

export default MenuItemList;
