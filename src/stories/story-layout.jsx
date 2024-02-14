import { Head } from '../package/layouts/head.jsx'
import { StoryMenu } from '../package/components/navigation/story-menu/story-menu.jsx'
import { getMenuItems } from '../package/layouts/get-menu-items.js'
import favicon from '../assets/favicon/favicon.ico'
import { globals } from '../data/globals.js'

export const StoryLayout = props => {
  const mainMenu = getMenuItems({
    pages: props.pages,
  })

  return (
    <html lang={globals.metadata.language}>
      <Head
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
