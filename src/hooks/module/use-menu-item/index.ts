import { useToggle } from '@/hooks/global/use-toggle';
import { UseMenuItemHook } from './types';

export const useMenuItem: UseMenuItemHook = () => {
  const [isState, setState] = useToggle();
  return [isState, setState];
};
