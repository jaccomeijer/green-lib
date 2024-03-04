import { getMenuActions, getRootMenuAction } from '@jaccomeijer/green-lib'
import { Head } from './head/head.jsx'
import { Menu } from './menu.jsx'
import favicon from '../assets/favicon/favicon.ico'
import { globals } from '../config/globals.js'

export const Layout = props => {
  const mainMenu = getMenuActions({
    pages: props.pages,
  })
  const rootAction = getRootMenuAction({ menu: mainMenu, pageUrl: props.page.url })
  const subMenu = rootAction?.children

  return (
    <html lang={globals.metadata.content.language}>
      <Head
        enableReload={true}
        favicon={favicon}
        globals={globals}
        page={props.page}
      />
      <body>
        <a class="skip-link" href="#main-content">Skip to content</a>
        <header role="banner" class="site-header s-wrapper">
          <div class="main-menu s-flex-row u-justify-space-between s-block-space u-block-space-2xs">
            <nav aria-label="primary">
              <Menu menu={mainMenu} class="s-flex-row" />
            </nav>
            <div class="site-branding">
              Green lib
            </div>
          </div>
          <nav class="sub-menu s-flex-row s-block-space u-block-space-3xs">
            <Menu menu={subMenu} class="s-flex-row" />
          </nav>
        </header>
        <main tabindex="-1" id="main-content">
          <div class="page s-wrapper s-block-space u-block-space-l">
            <article class="markdown s-flex-column u-gap-m">
              {props.children}
            </article>
          </div>
        </main>
        <footer class="s-wrapper u-font-size--1">
          This is the footer
        </footer>
      </body>
    </html>
  )
}
