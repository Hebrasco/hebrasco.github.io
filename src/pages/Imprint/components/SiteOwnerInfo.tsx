import React from 'react'
import { Email } from 'components/ui'
import { CITY, PORTFOLIO_NAME, STREET, ZIP } from 'data/config'

export default function SiteOwnerInfo(): JSX.Element {
  return (
    <>
      <ul className="list-unstyled">
        <li>{PORTFOLIO_NAME}</li>
        <li>{STREET}</li>
        <li>
          {ZIP} {CITY}
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
