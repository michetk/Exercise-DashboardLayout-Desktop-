import React from 'react'
import { Container, Content, PageContainer } from './Dashboardd.styled'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboarLayout = ({ children }: DashboardLayoutProps) => (
  <Container>
    <Header />
    <Content>
      <Sidebar />
      <PageContainer>
        <div>{children}</div>
      </PageContainer>
    </Content>
    <Footer />
  </Container>
)

export default DashboarLayout
