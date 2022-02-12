import {
  HeaderContainer,
  HeaderContentIcon,
  HeaderTitle,
} from './Header.styled';
import { ToggleIconHeader } from '../ToggleIconHeader';

const Header = () => (
  <HeaderContainer>
    <HeaderContentIcon>
      <ToggleIconHeader />
    </HeaderContentIcon>
    <HeaderTitle>Header</HeaderTitle>
  </HeaderContainer>
);

export default Header;
