import Link from 'next/link';
import { MenuItemContainer } from './MenuItem.styled';
import { ToggleIconSideBar } from '../ToggleIconSideBar/index';
import MenuItemList from '../MenuItemList/index';
import { Props } from '../../ts/interfaces/index';
import { useMenuItem } from '../../hooks/useMenuItem';

const MenuItem = ({
  menuItem: { name, icon: Icon, url, depth, subItems },
}: Props.MenuItemProps) => {
  const hasSubitem = subItems && subItems.length > 0;
  const [isExpanded, setExpandedFunction] = useMenuItem();

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
          <ToggleIconSideBar auternativeFunction={setExpandedFunction} />
        ) : undefined}
      </MenuItemContainer>
      {hasSubitem && isExpanded ? (
        <MenuItemList ItemList={subItems} />
      ) : undefined}
    </>
  );
};

export default MenuItem;
