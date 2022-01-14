const activeRoute = (route, link) => {
  if (route === '/') return 'active'
  if (route === link) {
    return 'active'
  } else {
    return ''
  }
}

export default activeRoute;