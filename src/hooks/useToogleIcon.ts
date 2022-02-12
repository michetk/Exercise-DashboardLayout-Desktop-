import { useCallback, useContext, useState } from 'react';
import { ToggleIconContext } from '../contexts/toggleIconContext';
import { Hooks, Params } from '../ts/types';

export const useToggleIcon: Hooks.useToggleIconType = () => {
  const [isExpanded, setExpanded] = useState(false);

  const setState = useCallback(
    (f: Params.setStateType<boolean> = (prev) => !prev) => {
      setExpanded(f);
    },
    []
  );

  return [isExpanded, setState];
};

export const useToggleIconContext = () => {
  const { isExpanded, setState } = useContext(ToggleIconContext);
  return { isExpanded, setState };
};
