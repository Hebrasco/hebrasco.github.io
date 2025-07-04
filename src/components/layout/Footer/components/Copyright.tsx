import { Column } from 'components/layout'
import { CONFIG } from 'data'

function Copyright() {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <Column className="justify-self-end" md={6}>
      <p className="align-items-center m-0 py-2">
        Copyright © {getCurrentYear()} {CONFIG.profile.name}. All rights reserved.
      </p>
    </Column>
  )
}

export { Copyright }
