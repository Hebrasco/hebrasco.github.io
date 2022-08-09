import { CONFIG } from 'data'
import React from 'react'

export function Email() {
  return <a href={`mailto:${CONFIG.profile.email}`}>{CONFIG.profile.email}</a>
}
