import React from 'react';

export namespace Props {
  export interface ContainerProps {
    title: string;
    children: React.ReactNode;
  }

  export interface DashboardLayoutProps {
    children: React.ReactNode;
  }
}
