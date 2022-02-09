import React from 'react';

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
}
