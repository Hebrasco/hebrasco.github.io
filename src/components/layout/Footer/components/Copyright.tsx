import { CONFIG } from 'data'
import React from 'react'
import { Col } from 'react-bootstrap'

export function Copyright(): JSX.Element {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <Col>
      <p className="align-items-center m-0 py-2">
        Copyright © {getCurrentYear()} {CONFIG.profile.name}. All rights
        reserved.
      </p>
    </Col>
  )
}
