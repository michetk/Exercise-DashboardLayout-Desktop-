import { useCallback, useContext, useState } from 'react';
import { ToggleIconContext } from '../contexts/toggleIcon';
import { ToggleSideBarItemContext } from '../contexts/toggleSideBarIcon';

// eslint-disable-next-line no-unused-vars
type SetState<T> = (prev: T) => T;
type UseToggleIcon = () => [boolean, () => void];

export const useToggleIcon: UseToggleIcon = () => {
  const [isExpanded, setExpanded] = useState(false);

  const setState = useCallback((f: SetState<boolean> = (prev) => !prev) => {
    setExpanded(f);
  }, []);

  return [isExpanded, setState];
};

export const useToggleIconContext = () => {
  const { isExpanded, setState } = useContext(ToggleIconContext);
  return { isExpanded, setState };
};

export const useToggleSideBarContext = () => {
  const { isExpanded, setState } = useContext(ToggleSideBarItemContext);
  return { isExpanded, setState };
};
