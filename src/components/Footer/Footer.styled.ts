import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.secondary};
`
