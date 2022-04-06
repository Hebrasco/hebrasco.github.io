import './styles.css'

import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { ROUTES } from 'constants/routes'

export default function ScrollDownIcon() {
  return (
    <div className="scroll-down-icon-container">
      <HashLink to={ROUTES.aboutMe}>
        <div className="scroll-down-icon"></div>
      </HashLink>
    </div>
  )
}
