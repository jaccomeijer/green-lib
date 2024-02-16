import { Head } from '../package/layouts/head.jsx'
import { StoryMenu } from '../package/components/navigation/story-menu/story-menu.jsx'
import { getMenuActions } from '../package/layouts/get-menu-actions.js'
import favicon from '../assets/favicon/favicon.ico'
import { globals } from '../data/globals.js'

export const StoryLayout = props => {
  const mainMenu = getMenuActions({
    pages: props.pages,
  })

  return (
    <html lang={globals.metadata.content.language}>
      <Head
        enableReload={true}
        favicon={favicon}
        globals={globals}
        page={props.page}
      />
      <body class="margin-bottom-6">
        <div class="container">
          <StoryMenu
            globals={globals}
            mainMenu={mainMenu}
            />
          {props.children}
        </div>
      </body>
    </html>
  )
}
