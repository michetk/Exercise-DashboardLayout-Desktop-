import { HeaderContainer, HeaderContentIcon, HeaderTitle } from './styled';
import { ToggleIconHeader } from '../toggle-icon-header';

const Header = () => (
  <HeaderContainer>
    <HeaderContentIcon>
      <ToggleIconHeader />
    </HeaderContentIcon>
    <HeaderTitle>Header</HeaderTitle>
  </HeaderContainer>
);

export default Header;
