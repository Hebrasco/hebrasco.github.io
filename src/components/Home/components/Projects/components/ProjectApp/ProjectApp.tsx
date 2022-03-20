import React from 'react'
import BlankIcon from 'assets/icons/blank_icon.svg'
import ProjectModel from 'models/ProjectModel'
import { useWindowSize } from 'utils/hooks'
import { conditionalStyle } from 'utils/helpers'
import './ProjectApp.css'

interface Props {
  project: ProjectModel
}

export default function ProjectApp({ project }: Props) {
  const { isXs } = useWindowSize()
  const isBlankIcon = project.image === BlankIcon

  return (
    <div className="project-app-container d-flex flex-column align-items-center">
      <Image
        src={project.image}
        width="100%"
        rounded
        className={`${isBlankIcon ? 'invertDark' : null}`}
      />
      <p
        className={`text-break text-center mt-2 lh-sm
          ${conditionalStyle(isXs, 'project-app-name-xs')}
        `}
      >
        {project.shortName}
      </p>
    </div>
  )
}
