import { useToggleContext } from '@/hooks/global/toggle';
import { SidebarContainer } from './styled';
import MenuItemList from '../menu-item-list';
import { ITEM_LIST } from '@/constants/menu-item-list';

const Sidebar = () => {
  const [isExpanded] = useToggleContext();

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <MenuItemList ItemList={ITEM_LIST} />
    </SidebarContainer>
  );
};

export default Sidebar;
