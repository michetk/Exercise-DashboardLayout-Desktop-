import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  color: ${(props) => props.theme.light.text.primary.light};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px;
`;
