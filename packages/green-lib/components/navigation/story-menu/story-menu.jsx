import css from './story-menu.ce.css'
import ceJs from './story-menu.ce.js'
import globalCss from '../../../css/global.bundle.css'

export const StoryMenu = props => (<story-menu>
  <template shadowrootmode="open">
    <div>
      <ul>
        {props.mainMenu.map(menuAction => (
          <li>
            <a href={menuAction.url}>{menuAction.heading}</a>
            {
              Array.isArray(menuAction.children) && (
                <ul>
                  {menuAction.children.map(subMenuAction => (
                    <li>
                      <a href={subMenuAction.url}>{subMenuAction.heading}</a>
                    </li>
                  ))}
                </ul>
              )
            }
          </li>
        ))}
      </ul>
    </div>
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${css}`} />
  </template>
  <script defer src={`${props.globals.baseUrl}${props.globals.assetUrl}${ceJs}`} />
</story-menu>
)
