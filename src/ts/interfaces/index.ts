import React from 'react';

import { Menu, Params } from '../types';

export namespace Props {
  export interface ContainerProps {
    title: string;
    children: React.ReactNode;
  }

  export interface DashboardLayoutProps {
    children: React.ReactNode;
  }

  export interface ToggleSideBarItemContextProps {
    children: React.ReactNode;
  }

  export interface ToggleIconProviderProps {
    children: React.ReactNode;
  }

  export interface MenuItemProps {
    menuItem: Menu.ItemList;
  }

  export interface ToggleSideBarProps {
    auternativeFunction?: Params.auternativeFunctionType;
  }

  export interface MenuItemListProps {
    ItemList: Menu.ItemList[];
  }
}
