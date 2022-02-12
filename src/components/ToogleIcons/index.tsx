import {
  Menu,
  ChevronLeft,
  ExpandLess,
  ExpandMore,
} from '@styled-icons/material';
import { useToggleSideBarItem } from '../../hooks/useToggleSideBarItem';
import { useToggleIconContext } from '../../hooks/useToogleIcon';
import { Props } from '../../ts/interfaces';

export const ToggleHeaderMenu = () => {
  const { isExpanded, setState } = useToggleIconContext();

  return isExpanded ? (
    <ChevronLeft onClick={() => setState()} />
  ) : (
    <Menu onClick={() => setState()} />
  );
};

export const ToggleSideBarItem = ({
  auternativeFunction,
}: Props.ToggleSideBarProps) => {
  const isAuternativeFunction = auternativeFunction || undefined;
  const [isExpanded, setStateFunction] = useToggleSideBarItem(
    isAuternativeFunction
  );

  return isExpanded ? (
    <ExpandLess onClick={() => setStateFunction()} />
  ) : (
    <ExpandMore onClick={() => setStateFunction()} />
  );
};
