import { getMenuActions } from '@jaccomeijer/green-lib'
import { Head } from './head.jsx'
import { StoryMenu } from '../story-menu/story-menu.jsx'
import favicon from '../../assets/favicon/favicon.ico'
import { globals } from '../../config/globals.js'

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
