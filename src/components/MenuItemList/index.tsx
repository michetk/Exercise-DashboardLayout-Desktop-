import { Props } from '../../ts/interfaces/index';
import MenuItem from '../MenuItem/index';

const MenuItemList = ({ ItemList }: Props.MenuItemListProps) => (
  <div>
    {ItemList.map((option) => (
      <MenuItem menuItem={option} key={option.id} />
    ))}
  </div>
);

export default MenuItemList;
