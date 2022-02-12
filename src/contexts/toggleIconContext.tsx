import { createContext, useMemo } from 'react';
import { useToggleIcon } from '../hooks/useToogleIcon';
import { Contexts } from '../ts/types/index';
import { Props } from '../ts/interfaces/index';

export const ToggleIconContext = createContext(
  {} as Contexts.ToggleIconContextType
);

const ToggleIconProvider = ({ children }: Props.ToggleIconProviderProps) => {
  const [isExpanded, setState] = useToggleIcon();

  const context = useMemo(() => ({ isExpanded, setState }), [isExpanded]);

  return (
    <ToggleIconContext.Provider value={context}>
      {children}
    </ToggleIconContext.Provider>
  );
};

export default ToggleIconProvider;
