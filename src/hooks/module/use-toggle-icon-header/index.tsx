import { useContext } from 'react';
import { UseToggleIconHeaderHook } from './types';
import { ToggleIconHeaderContext } from '@/contexts/toggle-icon-header';

export const useToggleIconHeaderContext: UseToggleIconHeaderHook = () => {
  const { isState, setState } = useContext(ToggleIconHeaderContext);
  return [isState, setState];
};
