import { getTransitionDuration } from 'components/layout/NavBar/utils/getTransitionDuration'

function executeAfterTransition(element: HTMLDivElement, callback: () => void) {
  if (!element) return
  const durationOffset = 5
  const emulatedDuration = getTransitionDuration(element) + durationOffset
  let called = false

  const handler = ({ target }: Event) => {
    if (target !== element) {
      return
    }

    called = true
    element.removeEventListener('transitioned', handler)
    callback()
  }

  element.addEventListener('transitioned', handler)
  setTimeout(() => {
    if (!called) {
      element.dispatchEvent(new Event('transitioned'))
    }
  }, emulatedDuration)
}

export { executeAfterTransition }
