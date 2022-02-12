import styled from 'styled-components';

export const MenuItemContainer = styled.div<{ depth: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-left: ${({ depth }) => `${depth}rem`};
  animation: ${(props) => props.theme.aniamation.fadein} 0.5s linear;

  & svg {
    height: 30px;
    cursor: pointer;
    animation: ${(props) => props.theme.aniamation.fadein} 0.5s linear;
  }

  .grup-icon-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    & svg {
      padding-right: 10px;
    }
  }
`;
