import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.light.colors.primary.main};
  height: 50px;
`;

export const HeaderTitle = styled.div`
  margin: auto;
`;

export const HeaderContentIcon = styled.div`
  padding: 10px;
  & svg {
    height: 30px;
    animation: ${(props) => props.theme.aniamation.fadein} 0.5s linear;

    &:hover {
      cursor: pointer;
    }
  }
`;
