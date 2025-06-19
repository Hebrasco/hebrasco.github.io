import React, { MouseEvent, useState } from 'react'

import { Project } from 'types'
import { Actions, ComingSoon } from './components'
import { conditionalStyle } from 'utils'
import { useWindowSize } from 'hooks'
import { PROJECT_CONTAINER_SIZE } from 'pages/Home/components/Projects/constants'

import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'data'
import { ProjectPreviewImage } from 'pages/Home/components/Projects/components/ProjectPreviewImage'
import { Badges } from 'pages/Project/components/Badges'

interface Props {
  project: Project
}

export function Preview({ project }: Props): JSX.Element {
  const [isDetailShown, setIsDetailShown] = useState<boolean>(false)
  const navigate = useNavigate()
  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm
  const width = isMobile
    ? PROJECT_CONTAINER_SIZE.xs.width
    : PROJECT_CONTAINER_SIZE.md.width
  const height = isMobile
    ? PROJECT_CONTAINER_SIZE.xs.height
    : PROJECT_CONTAINER_SIZE.md.height

  function handleNavigateToDetails() {
    navigate(ROUTES.project.replace(':projectId', project.id))
  }

  function handleToggleDetails(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()
    setIsDetailShown((prevState) => !prevState)
  }

  return (
    <div
      className={`rounded ${
        styles['preview-content-container']
      } ${conditionalStyle(
        !isMobile,
        styles['preview-content-container-desktop']
      )}`}
      style={{
        backgroundColor: project.previewColors.backgroundGradient.end,
        background: `linear-gradient(180deg,${project.previewColors.backgroundGradient.start} 20%, ${project.previewColors.backgroundGradient.end} 80%)`,
        width,
        height,
        scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
      }}
      onClick={handleNavigateToDetails}
    >
      <div className="mb-auto">
        <h3 style={{ color: project.previewColors.title }}>{project.name}</h3>
        <ComingSoon
          isComingSoon={project.isComingSoon}
          color={project.previewColors.subtitle}
        />
        {!isMobile && isDetailShown ? (
          <Badges
            colors={project.previewColors.actions}
            languages={project.languages}
            frameworks={project.frameworks}
          />
        ) : null}
      </div>
      {isDetailShown ? (
        <p
          style={{ color: project.previewColors.title }}
          className={conditionalStyle(!isMobile, 'h4')}
        >
          {project.description}
        </p>
      ) : (
        <>
          <ProjectPreviewImage image={project.previewImageMain} />
        </>
      )}
      <Actions
        projectId={project.id}
        colors={project.previewColors.actions}
        onToggleDetails={handleToggleDetails}
        isDetailShown={isDetailShown}
      />
    </div>
  )
}
