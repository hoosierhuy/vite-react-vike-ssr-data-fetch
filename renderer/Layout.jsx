export { Layout }

// Library imports
import { StrictMode } from 'react'
import PropTypes from 'prop-types'

// Local imports
import { childrenPropType } from './PropTypeValues'
import logoUrl from './logo.svg'
import { PageContextProvider } from './usePageContext'
import { Link } from './Link'
import './css/index.css'
import './Layout.css'

Layout.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
}

function Layout({ pageContext, children }) {
  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Frame>
          <Sidebar>
            <Logo />
            <Link href="/">Welcome</Link>
            <Link href="/fetching-products">Fetching Products</Link>
            <Link href="/star-wars">Fetching Star Wars Movies</Link>
          </Sidebar>
          <Content>{children}</Content>
        </Frame>
      </PageContextProvider>
    </StrictMode>
  )
}

Frame.propTypes = {
  children: childrenPropType,
}

function Frame({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: childrenPropType,
}

function Sidebar({ children }) {
  return (
    <div
      id="sidebar"
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.8rem',
        borderRight: '2px solid #eee',
      }}
    >
      {children}
    </div>
  )
}

Content.propTypes = {
  children: childrenPropType,
}

function Content({ children }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: 20,
          paddingBottom: 50,
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
