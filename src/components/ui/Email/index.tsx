import { CONFIG } from 'data'
import React from 'react'

export default function Email() {
  return <a href={`mailto:${CONFIG.profile.email}`}>{CONFIG.profile.email}</a>
}
