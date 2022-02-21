import { useContext, useState } from 'react';
import { Context } from '@/contexts/toggle-context';
import { HookOwn } from '@/types/global';

export const useToggle: HookOwn = () => {
  const [isState, setState] = useState(false);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [isState, toggle];
};

export const useToggleContext: HookOwn = () => {
  const { isState, setState } = useContext(Context);
  return [isState, setState];
};
