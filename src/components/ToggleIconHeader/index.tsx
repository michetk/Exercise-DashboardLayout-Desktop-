import { Menu, ChevronLeft } from '@styled-icons/material';
import { useToggleIconContext } from '../../hooks/useToogleIcon';

export const ToggleIconHeader = () => {
  const { isExpanded, setState } = useToggleIconContext();

  return isExpanded ? (
    <ChevronLeft onClick={() => setState()} />
  ) : (
    <Menu onClick={() => setState()} />
  );
};
