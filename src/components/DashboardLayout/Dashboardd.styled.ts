import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.textDark};
`

export const Content = styled.div`
  display: flex;
  flex: 1;
`

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 80vw;
`
