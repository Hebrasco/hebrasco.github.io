import { Email } from 'components/ui'
import { CONFIG } from 'data'

function SiteOwnerInfo() {
  return (
    <>
      <ul className="list-unstyled">
        <li>{CONFIG.profile.name}</li>
        <li>{CONFIG.profile.street}</li>
        <li>
          {CONFIG.profile.zip} {CONFIG.profile.city}
        </li>
      </ul>
      <b>Kontakt</b>
      <ul className="list-unstyled">
        <li>
          <Email />
        </li>
      </ul>
    </>
  )
}

export { SiteOwnerInfo }
