import { useToggle } from '@/hooks/global/use-toggle';
import { useToggleIconSidebarHook } from './types';

export const useToggleIconSidebar: useToggleIconSidebarHook = (
  setStateExtended
) => {
  const [isState, setState] = useToggle();

  function toggle() {
    setState();
    setStateExtended();
  }

  return [isState, toggle];
};
