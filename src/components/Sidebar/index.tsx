import { useToggleIconContext } from '../../hooks/useToogleIcon';
import { SidebarContainer } from './Sidebar.styled';

const Sidebar = () => {
  const { isExpanded } = useToggleIconContext();

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <div>Sidebar</div>
    </SidebarContainer>
  );
};

export default Sidebar;
