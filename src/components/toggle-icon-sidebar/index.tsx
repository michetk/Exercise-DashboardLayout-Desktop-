import { ExpandLess, ExpandMore } from '@styled-icons/material';
import { useToggleSidebarItem } from '@/hooks/module/toggle-sidebar-item';
import { Props } from './interfaces';

export const ToggleIconSideBar = ({ auternativeFunction }: Props) => {
  const isAuternativeFunction = auternativeFunction || undefined;
  const [isExpanded, setStateFunction] = useToggleSidebarItem(
    isAuternativeFunction
  );

  return isExpanded ? (
    <ExpandLess onClick={() => setStateFunction()} />
  ) : (
    <ExpandMore onClick={() => setStateFunction()} />
  );
};
