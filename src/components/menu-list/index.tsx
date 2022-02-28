import { MenuListProps } from './interfaces';
import MenuItem from '../menu-item';

const MenuList = ({ list }: MenuListProps) => (
  <div>
    {list.map((item) => (
      <MenuItem menuItem={item} key={item.id} />
    ))}
  </div>
);

export default MenuList;
