import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  color: ${({ theme }) => theme.text.primary.light};
`;

export const DashboardContent = styled.div`
  display: flex;
  flex: 1;
`;

export const DashboardPage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px;
`;
