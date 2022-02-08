import {
  HeaderContainer,
  HeaderContentIcon,
  HeaderTitle,
} from './Header.styled';
import { ToggleHeaderMenu } from '../ToogleIcons';

const Header = () => (
  <HeaderContainer>
    <HeaderContentIcon>
      <ToggleHeaderMenu />
    </HeaderContentIcon>
    <HeaderTitle>Header</HeaderTitle>
  </HeaderContainer>
);

export default Header;
