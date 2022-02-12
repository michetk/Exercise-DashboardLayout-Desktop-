import { useToggleIcon } from './useToogleIcon';
import { Hooks, Params } from '../ts/types/index';

export const useToggleSideBarItem: Hooks.useToggleSIdebarItemType<
  Params.auternativeFunctionType
> = (auternativeFunction) => {
  const [isExpanded, setState] = useToggleIcon();

  const setStateFunction = () => {
    setState();
    if (auternativeFunction) {
      auternativeFunction();
    }
  };

  return [isExpanded, setStateFunction];
};
