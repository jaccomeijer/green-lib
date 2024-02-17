const parseUrl = ({ globals, action }) => {
  if (action?.url && action.url.startsWith('http')) {
    return action.url
  }
  return globals.baseUrl + (action?.url || '#')
}

export const getOnClickAction = ({ globals, action }) =>
  `location.href='${parseUrl({ globals, action })}';`

export const getHrefAction = ({ globals, action }) =>
  parseUrl({ globals, action })
