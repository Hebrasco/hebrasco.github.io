import { ROUTES } from 'data'
import { Link } from 'react-router-dom'
import styles from './ScrollDownIcon.module.css'

function ScrollDownIcon() {
  return (
    <div className={styles['scroll-down-icon-container']}>
      <Link to={ROUTES.aboutMe}>
        <span className="sr-only">Scroll to about me</span>
        <div className={`${styles['scroll-down-icon']} shadow d-flex justify-content-center`}>
          <i className="bi bi-chevron-down"></i>
        </div>
      </Link>
    </div>
  )
}

export { ScrollDownIcon }
