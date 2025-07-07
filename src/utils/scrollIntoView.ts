function scrollIntoView(hash: string, hashReplace: string = '#') {
  const id = hash.replace(hashReplace, '')
  const element = document.getElementById(id)

  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

export { scrollIntoView }
