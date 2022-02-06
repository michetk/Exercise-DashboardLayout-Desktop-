import React, { createContext, useMemo } from 'react';
import { useToggleIcon } from '../hooks/useToogleIcon';

type ToggleIconContextType = {
  isExpanded: boolean;
  setState: () => void;
};

interface ToggleIconProviderProps {
  children: React.ReactNode;
}

export const ToggleIconContext = createContext({} as ToggleIconContextType);

const ToggleIconProvider = ({ children }: ToggleIconProviderProps) => {
  const [isExpanded, setState] = useToggleIcon();

  const context = useMemo(() => ({ isExpanded, setState }), [isExpanded]);

  return (
    <ToggleIconContext.Provider value={context}>
      {children}
    </ToggleIconContext.Provider>
  );
};

export default ToggleIconProvider;
