import React from 'react'
import Email from 'common/Email/Email'
import { CITY, PORTFOLIO_NAME, STREET, ZIP } from 'constants/config'

export default function SiteOwnerInfo() {
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
