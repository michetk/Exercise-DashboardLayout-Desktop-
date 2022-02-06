import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ isExpanded: boolean }>`
  display: flex;
  justify-content: center;
  width: ${({ isExpanded }) => (isExpanded ? '20vw' : '0vw')};
  background: ${({ theme }) => theme.colors.greyBg};
  transition: width 0.2s linear;
  overflow: hidden;
`;
