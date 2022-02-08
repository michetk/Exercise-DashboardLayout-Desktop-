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
