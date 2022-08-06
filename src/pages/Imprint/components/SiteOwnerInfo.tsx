import React from 'react'
import { Email } from 'components/ui'
import { CONFIG } from 'data'

export default function SiteOwnerInfo(): JSX.Element {
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
