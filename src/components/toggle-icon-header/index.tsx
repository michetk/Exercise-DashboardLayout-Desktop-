import { Menu, ChevronLeft } from '@styled-icons/material';
import { useToggleContext } from '@/hooks/global/toggle';

export const ToggleIconHeader = () => {
  const [isExpanded, setState] = useToggleContext();

  return isExpanded ? (
    <ChevronLeft onClick={() => setState()} />
  ) : (
    <Menu onClick={() => setState()} />
  );
};
