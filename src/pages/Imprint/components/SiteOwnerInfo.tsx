import { Email } from 'components/ui'
import { CONFIG } from 'data'
import React from 'react'

export function SiteOwnerInfo(): JSX.Element {
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
