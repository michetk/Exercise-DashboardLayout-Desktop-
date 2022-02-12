import { useState } from 'react';
import { Hooks } from '../ts/types/index';

export const useMenuItem: Hooks.useMenuItemType = () => {
  const [isExpanded, setExpanded] = useState(false);

  const setExpandedFunction = () => {
    setExpanded((prev) => !prev);
  };

  return [isExpanded, setExpandedFunction];
};
