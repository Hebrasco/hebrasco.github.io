import Action from 'pages/Home/components/Projects/components/ProjectAction'
import React from 'react'

interface Props {
  onlineURL?: string
  sourceURL?: string
}

export default function Actions({ onlineURL, sourceURL }: Props): JSX.Element {
  return (
    <div className="mt-5">
      <Action to={onlineURL} label="View" className="m-0" filled />
      <Action to={sourceURL} label="Source Code" className="ms-3" />
    </div>
  )
}
