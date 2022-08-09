import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { LoadingSpinner } from './LoadingSpinner'

interface Props {
  showSpinner: boolean
}

export function Actions({ showSpinner }: Props): JSX.Element {
  return (
    <Col xs={12}>
      <div className="mt-4 d-flex">
        <Button variant="dark" type="submit">
          Submit Form
        </Button>
        <Button variant="outline-dark" type="reset" className="ms-3">
          Reset
        </Button>
        <LoadingSpinner show={showSpinner} />
      </div>
    </Col>
  )
}
