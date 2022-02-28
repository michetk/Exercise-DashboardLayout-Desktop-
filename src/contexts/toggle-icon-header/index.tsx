import { createContext, useMemo } from 'react';
import { useToggle } from '@/hooks/global/use-toggle';
import { ValueInitial } from './types';
import { ToggleIconHeaderProviderProps } from './interfaces';

export const ToggleIconHeaderContext = createContext({} as ValueInitial);

const ToggleIconHeaderProvider = ({
  children,
}: ToggleIconHeaderProviderProps) => {
  const [isState, setState] = useToggle();
  const value = useMemo(() => ({ isState, setState }), [isState]);

  return (
    <ToggleIconHeaderContext.Provider value={value}>
      {children}
    </ToggleIconHeaderContext.Provider>
  );
};

export default ToggleIconHeaderProvider;
