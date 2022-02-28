import { SidebarContainer } from './styled';
import MenuList from '../menu-list';
import { ITEM_LIST } from '@/constants/menu/menu-list';
import { useToggleIconHeaderContext } from '@/hooks/module/use-toggle-icon-header';

const Sidebar = () => {
  const [isExpanded] = useToggleIconHeaderContext();

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <MenuList list={ITEM_LIST} />
    </SidebarContainer>
  );
};

export default Sidebar;
