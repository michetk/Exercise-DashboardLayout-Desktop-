import { ExpandLess, ExpandMore } from '@styled-icons/material';
import { useToggleIconSidebar } from '@/hooks/module/use-toggle-icon-sidebar';
import { ToggleIconSideBarProps } from './interfaces';

const ToggleIconSidebar = ({ setStateExtended }: ToggleIconSideBarProps) => {
  const [isExpanded, setExpanded] = useToggleIconSidebar(setStateExtended);

  return isExpanded ? (
    <ExpandLess onClick={setExpanded} />
  ) : (
    <ExpandMore onClick={setExpanded} />
  );
};

export default ToggleIconSidebar;
