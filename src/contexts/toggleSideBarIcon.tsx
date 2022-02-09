import { createContext, useMemo } from 'react';
import { useToggleIcon } from '../hooks/useToogleIcon';
import { ToggleIcon } from '../ts/types/index';
import { Props } from '../ts/interfaces/index';

export const ToggleSideBarItemContext = createContext(
  {} as ToggleIcon.ToggleIconContextType
);

const ToggleSideBarItemProvider = ({
  children,
}: Props.ToggleSideBarItemContextProps) => {
  const [isExpanded, setState] = useToggleIcon();

  const context = useMemo(() => ({ isExpanded, setState }), [isExpanded]);

  return (
    <ToggleSideBarItemContext.Provider value={context}>
      {children}
    </ToggleSideBarItemContext.Provider>
  );
};

export default ToggleSideBarItemProvider;
