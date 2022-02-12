import styled from 'styled-components';

export const MenuItemContainer = styled.div<{ depth: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-left: ${({ depth }) => `${depth}rem`};

  & svg {
    height: 30px;
    cursor: pointer;
  }

  .linkItem {
    cursor: pointer;

    & svg {
      padding-right: 10px;
    }
  }
`;
