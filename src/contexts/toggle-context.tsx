import { createContext, useMemo } from 'react';
import { useToggle } from '@/hooks/global/toggle';
import { ValueInitial } from './types';
import { Props } from './interfaces';

export const Context = createContext({} as ValueInitial);

const Provider = ({ children }: Props) => {
  const [isState, setState] = useToggle();

  const context = useMemo(() => ({ isState, setState }), [isState]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;
