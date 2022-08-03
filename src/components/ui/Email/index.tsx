import React from 'react'
import { MAILTO_DANIEL_BEDRICH } from 'data/config'

export default function Email() {
  return (
    <a href={MAILTO_DANIEL_BEDRICH}>
      {MAILTO_DANIEL_BEDRICH.replace('mailto:', '')}
    </a>
  )
}
