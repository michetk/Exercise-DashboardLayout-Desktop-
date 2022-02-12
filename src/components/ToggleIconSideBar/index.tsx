import { ExpandLess, ExpandMore } from '@styled-icons/material';
import { useToggleSideBarItem } from '../../hooks/useToggleSideBarItem';
import { Props } from '../../ts/interfaces';

export const ToggleIconSideBar = ({
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
