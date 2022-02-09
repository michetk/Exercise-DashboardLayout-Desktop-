import {
  Menu,
  ChevronLeft,
  ExpandLess,
  ExpandMore,
} from '@styled-icons/material';
import {
  useToggleIconContext,
  useToggleSideBarContext,
} from '../../hooks/useToogleIcon';

export const ToggleHeaderMenu = () => {
  const { isExpanded, setState } = useToggleIconContext();

  return isExpanded ? (
    <ChevronLeft onClick={() => setState()} />
  ) : (
    <Menu onClick={() => setState()} />
  );
};

export const ToggleSideBarItem = () => {
  const { isExpanded, setState } = useToggleSideBarContext();

  return isExpanded ? (
    <ExpandLess onClick={setState} />
  ) : (
    <ExpandMore onClick={setState} />
  );
};
