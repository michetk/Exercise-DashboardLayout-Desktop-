import { Props } from './interfaces';
import MenuItem from '../menu-item';

const MenuItemList = ({ ItemList }: Props) => (
  <div>
    {ItemList.map((option) => (
      <MenuItem menuItem={option} key={option.id} />
    ))}
  </div>
);

export default MenuItemList;
