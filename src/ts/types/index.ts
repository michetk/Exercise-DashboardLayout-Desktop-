/* eslint-disable no-unused-vars */
import React from 'react';

export namespace Menu {
  export type MenuItem = {
    name: string;
    icon: React.ComponentType;
    url: string;
    subItems?: MenuItem[];
  };

  export type ItemList = {
    name: string;
    icon: React.ComponentType;
    url: string;
    id: string;
    depth: number;
    subItems?: ItemList[];
  };
}

export namespace Params {
  export type auternativeFunctionType = (() => void) | undefined;
  export type setStateType<T> = (prev: T) => T;
}

export namespace Hooks {
  export type useMenuItemType = () => [boolean, () => void];
  export type useToggleSIdebarItemType<T> = (
    auternativeFunction: T
  ) => [boolean, () => void];
  export type useToggleIconType = () => [boolean, () => void];
}

export namespace Contexts {
  export type ToggleIconContextType = {
    isExpanded: boolean;
    setState: () => void;
  };
}
