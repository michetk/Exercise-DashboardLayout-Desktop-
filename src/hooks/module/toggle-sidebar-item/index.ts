import { useToggle } from '@/hooks/global/toggle';
import { HookOwn } from './types';

export const useToggleSidebarItem: HookOwn = (auternativeFunction) => {
  const [isExpanded, setState] = useToggle();

  const setStateFunction = () => {
    setState();
    if (auternativeFunction) {
      auternativeFunction();
    }
  };

  return [isExpanded, setStateFunction];
};
