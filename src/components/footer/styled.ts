import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${(props) => props.theme.light.colors.primary.main};
`;
