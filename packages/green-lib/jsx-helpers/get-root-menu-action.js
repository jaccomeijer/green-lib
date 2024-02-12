export const getRootMenuAction = ({ menu, pageUrl }) => {
  let rootAction

  menu.forEach(menuAction => {
    if (menuAction.url === pageUrl) {

      // Root menu item is active
      rootAction = menuAction
      return
    }
    if (Array.isArray(menuAction.children)) {
      menuAction.children.forEach(subMenuAction => {
        if (subMenuAction.url === pageUrl) {

          // Sub menu item is active, return root
          rootAction = menuAction
        }
      })
    }
  })
  return rootAction
}
