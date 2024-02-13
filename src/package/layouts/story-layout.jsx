import { Head } from './head.jsx'
import { StoryMenu } from '../components/navigation/story-menu/story-menu.jsx'
import { getMenuItems } from './get-menu-items.js'
import favicon from '../../assets/favicon/favicon.ico'

export const StoryLayout = props => {
  const mainMenu = getMenuItems({
    pages: props.pages,
  })

  return (
    <html lang={props.metadata.language}>
      <Head
        metadata={props.metadata}
        page={props.page}
        favicon={favicon}
      />
      <body class="margin-bottom-6">
        <div class="container">
          <StoryMenu mainMenu={mainMenu} />
          {props.children}
        </div>
      </body>
    </html>
  )
}
