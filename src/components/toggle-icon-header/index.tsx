import { Menu, ChevronLeft } from '@styled-icons/material';
import { useToggleIconHeaderContext } from '@/hooks/module/use-toggle-icon-header';

export const ToggleIconHeader = () => {
  const [isExpanded, setExpanded] = useToggleIconHeaderContext();

  return isExpanded ? (
    <ChevronLeft onClick={setExpanded} />
  ) : (
    <Menu onClick={setExpanded} />
  );
};
