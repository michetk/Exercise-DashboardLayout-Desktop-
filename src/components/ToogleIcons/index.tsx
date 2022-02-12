import {
  Menu,
  ChevronLeft,
  ExpandLess,
  ExpandMore,
} from '@styled-icons/material';
import { useToggleIconContext, useToggleIcon } from '../../hooks/useToogleIcon';
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
  const [isExpanded, setState] = useToggleIcon();

  const setStateFunction = () => {
    setState();
    if (auternativeFunction) {
      auternativeFunction();
    }
  };

  return isExpanded ? (
    <ExpandLess onClick={setStateFunction} />
  ) : (
    <ExpandMore onClick={setStateFunction} />
  );
};

ToggleSideBarItem.defaultProps = {
  auternativeFunction: undefined,
};
