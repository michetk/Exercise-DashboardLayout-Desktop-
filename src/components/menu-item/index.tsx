import Link from 'next/link';
import { MenuItemContainer } from './styled';
import ToggleIconSidebar from '../toggle-icon-sidebar';
import MenuList from '../menu-list';
import { MenuItemProps } from './interfaces';
import { useMenuItem } from '@/hooks/module/use-menu-item';

const MenuItem = ({
  menuItem: { name, icon: Icon, url, depth, subItems },
}: MenuItemProps) => {
  const [isExpanded, setExpanded] = useMenuItem();

  return (
    <>
      <MenuItemContainer depth={depth}>
        <Link href={url} passHref>
          <div className="link-menu">
            <Icon />
            <span>{name}</span>
          </div>
        </Link>
        {subItems ? (
          <ToggleIconSidebar setStateExtended={setExpanded} />
        ) : undefined}
      </MenuItemContainer>
      {subItems && isExpanded ? <MenuList list={subItems} /> : undefined}
    </>
  );
};

export default MenuItem;
