import { ROUTES } from 'data'
import styles from './ScrollDownIcon.module.css'

function ScrollDownIcon() {
  function handleScrollDown() {
    const id = ROUTES.aboutMe.replace('/#', '')
    const element = document.getElementById(id)

    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles['scroll-down-icon-container']}>
      <button onClick={handleScrollDown} type="button">
        <span className="sr-only">Scroll to about me</span>
        <div className={`${styles['scroll-down-icon']} shadow`}>
          <i className="bi bi-chevron-down"></i>
        </div>
      </button>
    </div>
  )
}

export { ScrollDownIcon }
