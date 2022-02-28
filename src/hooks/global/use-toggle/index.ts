import { useState } from 'react';
import { UseToggleHook } from './types';

export const useToggle: UseToggleHook = () => {
  const [isState, setState] = useState(false);

  function toggle() {
    setState((prev) => !prev);
  }

  return [isState, toggle];
};
