import { CONFIG } from 'data'

function Email() {
  return (
    <span className="d-inline-flex align-items-center">
      <a href={`mailto:${CONFIG.profile.email}`}>{CONFIG.profile.email}</a>
      <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
    </span>
  )
}

export { Email }
