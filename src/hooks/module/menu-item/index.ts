import { useState } from 'react';
import { HookOwn } from '@/types/global';

export const useMenuItem: HookOwn = () => {
  const [isExpanded, setExpanded] = useState(false);

  const setExpandedFunction = () => {
    setExpanded((prev) => !prev);
  };

  return [isExpanded, setExpandedFunction];
};
