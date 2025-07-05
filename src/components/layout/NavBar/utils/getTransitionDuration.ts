function getTransitionDuration(element: HTMLDivElement) {
  let { transitionDuration, transitionDelay } = window.getComputedStyle(element as Element)
  const floatTransitionDuration = Number.parseFloat(transitionDuration)
  const floatTransitionDelay = Number.parseFloat(transitionDelay)

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0
  }

  transitionDuration = transitionDuration.split(',')[0]
  transitionDelay = transitionDelay.split(',')[0]
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1000
}

export { getTransitionDuration }
