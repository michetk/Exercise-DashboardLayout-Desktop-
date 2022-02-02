import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.main};
  color: ${theme.colors.secondary};
  height: 50px;
`
