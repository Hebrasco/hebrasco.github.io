import React from 'react'
import { CONFIG } from 'data'

export default function Email() {
  return <a href={`mailto:${CONFIG.profile.email}`}>{CONFIG.profile.email}</a>
}
