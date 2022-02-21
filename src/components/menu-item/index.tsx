import Link from 'next/link';
import { MenuItemContainer } from './styled';
import { ToggleIconSideBar } from '../toggle-icon-sidebar';
import MenuItemList from '../menu-item-list';
import { Props } from './interfaces';
import { useMenuItem } from '@/hooks/module/menu-item';

const MenuItem = ({
  menuItem: { name, icon: Icon, url, depth, subItems },
}: Props) => {
  const hasSubitem = subItems && subItems.length > 0;
  const [isExpanded, setExpandedFunction] = useMenuItem();

  return (
    <>
      <MenuItemContainer depth={depth}>
        <Link href={url} passHref>
          <div className="grup-icon-name">
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
