import { useState } from 'react';
import Link from 'next/link';
import { MenuItemContainer } from './MenuItem.styled';
import { ToggleSideBarItem } from '../ToogleIcons/index';
import MenuItemList from '../MenuItemList/index';
import { Props } from '../../ts/interfaces/index';

const MenuItem = ({
  menuItem: { name, icon: Icon, url, depth, subItems },
}: Props.MenuItemProps) => {
  const hasSubitem = subItems && subItems.length > 0;
  const [hasExpanded, setExpanded] = useState(false);

  const setExpandedFunction = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <MenuItemContainer depth={depth}>
        <Link href={url} passHref>
          <div className="linkItem">
            <Icon />
            <span>{name}</span>
          </div>
        </Link>
        {hasSubitem ? (
          <ToggleSideBarItem auternativeFunction={setExpandedFunction} />
        ) : undefined}
      </MenuItemContainer>
      {hasSubitem && hasExpanded ? (
        <MenuItemList ItemList={subItems} />
      ) : undefined}
    </>
  );
};

export default MenuItem;
