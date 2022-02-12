import { useToggleIconContext } from '../../hooks/useToogleIcon';
import { SidebarContainer } from './Sidebar.styled';
import MenuItemList from '../MenuItemList';
import { ITEM_LIST } from '../../constants/listItems';

const Sidebar = () => {
  const { isExpanded } = useToggleIconContext();

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <MenuItemList ItemList={ITEM_LIST} />
    </SidebarContainer>
  );
};

export default Sidebar;
