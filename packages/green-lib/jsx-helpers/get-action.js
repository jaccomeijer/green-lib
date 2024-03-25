const parseUrl = ({ globals, action }) => {
  if (!(action?.url)) {
    return ''
  }
  if (action.url && action.url.startsWith('http')) {
    return action.url
  }
  return (globals?.baseUrl || '') + (action.url)
}

export const getOnClickAction = ({ globals, action }) => {
  const url = parseUrl({ globals, action })

  if (!url) {
    return 'false'
  }
  return `location.href='${url}';`
}

export const getHrefAction = ({ globals, action }) =>
  parseUrl({ globals, action })
