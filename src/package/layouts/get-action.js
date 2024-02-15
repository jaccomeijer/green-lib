const parseUrl = ({ globals, url }) => {
  if (url && url.startsWith('http')) {
    return url
  }
  return globals.baseUrl + (url || '#')
}

export const getAction = ({ type, globals, url }) => {
  switch (type) {
  case 'onclick':
    return `location.href='${parseUrl({ globals, url })}';`

  case 'href':
    return parseUrl({ globals, url })

  default:
    return '#unknown-type'
  }
}
