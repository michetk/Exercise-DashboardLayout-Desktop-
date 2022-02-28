import styled from 'styled-components';

export const MenuItemContainer = styled.div<{ depth: number }>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-left: ${({ depth }) => `${depth}rem`};
  animation: ${({ theme }) => theme.animations.fadein} 0.5s linear;

  & svg {
    height: 30px;
    cursor: pointer;
    animation: ${({ theme }) => theme.animations.fadein} 0.5s linear;
  }

  & svg :last-child {
    margin-top: 5px;
  }

  .grup-icon-name {
    display: flex;
    align-items: center;
    cursor: pointer;

    & svg {
      padding-right: 10px;
    }
  }
`;
