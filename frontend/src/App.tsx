import { useEffect } from 'react'
import { CataloguePage } from './pages/CataloguePage'
import { GeneratorPage } from './pages/GeneratorPage'
import { DataScreenPage } from './pages/DataScreenPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { BrowserLink, navigate, useBrowserLocation } from './platform/browser/router'

export default function App() {
  const location = useBrowserLocation()
  const pathname = location.pathname === '/' ? '/market' : location.pathname

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/market${location.search}`, { replace: true })
    }
  }, [location.pathname, location.search])

  let page
  if (pathname === '/market') {
    page = <GeneratorPage locationSearch={location.search} />
  } else if (pathname === '/catalogue') {
    page = <CataloguePage locationSearch={location.search} />
  } else if (pathname === '/data-screen') {
    page = <DataScreenPage />
  } else {
    page = <NotFoundPage />
  }

  return (
    <div className="app-frame">
      <header className="site-header">
        <BrowserLink className="brand" to="/market" aria-label="Fixer's Cache home">
          <span className="brand-mark">FC</span>
          <span>
            <strong>FIXER'S CACHE</strong>
            <small>THE NIGHT CITY TOOLBOX</small>
          </span>
        </BrowserLink>
        <nav className="site-nav" aria-label="Primary navigation">
          <BrowserLink
            className={pathname === '/market' ? 'nav-link nav-active' : 'nav-link'}
            to="/market"
          >
            Night Market
          </BrowserLink>
          <BrowserLink
            className={pathname === '/catalogue' ? 'nav-link nav-active' : 'nav-link'}
            to="/catalogue"
          >
            Catalogue
          </BrowserLink>
          <BrowserLink
            className={pathname === '/data-screen' ? 'nav-link nav-active' : 'nav-link'}
            to="/data-screen"
          >
            Data Screen
          </BrowserLink>
        </nav>
      </header>

      {page}

      <footer className="site-footer">
        <span>Fixer's Cache // The Night City Toolbox</span>
        <span>Night Market • Catalogue • Data Screen</span>
      </footer>
    </div>
  )
}
