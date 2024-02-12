import css from './story-menu-ce.css'
import ceJs from './story-menu.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'

export const StoryMenu = props => (<story-menu>
  <template shadowrootmode="open">
    <div>
      <ul>
        {props.mainMenu.map(menuItem => (
          <li>
            <a href={menuItem.url}>{menuItem.heading}</a>
            {
              Array.isArray(menuItem.children) && (
                <ul>
                  {menuItem.children.map(subMenuItem => (
                    <li>
                      <a href={subMenuItem.url}>{subMenuItem.heading}</a>
                    </li>
                  ))}
                </ul>
              )
            }
          </li>
        ))}
      </ul>
    </div>
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${css}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</story-menu>
)
