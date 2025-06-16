import React, {
  MouseEvent,
  MouseEventHandler,
  useState,
  useTransition,
} from 'react'
import { Row } from 'react-bootstrap'
import { Project } from 'types'
import { ProjectImages } from '../ProjectImages'
import { Actions, Badges, ComingSoon, Responsibilities } from './components'
import { conditionalStyle } from 'utils'
import { useWindowSize } from 'hooks'
import { PROJECT_CONTAINER_SIZE } from 'pages/Home/components/Projects/constants'

import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'data'

interface Props {
  project: Project
  hasMarginRight: boolean
}

export function Preview({ project, hasMarginRight }: Props) {
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
      style={{
        width: `calc(${width}px + 1.5rem)`,
        height,
        scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
      }}
    >
      <div
        className={styles['preview-container']}
        style={{
          transform: conditionalStyle(
            isMobile,
            'translateX(12px)',
            'translateX(245px)'
          ),
          marginRight: conditionalStyle(hasMarginRight, '20px', '60px'),
          width,
        }}
      >
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
          }}
          onClick={handleNavigateToDetails}
        >
          <div className="mb-auto">
            <h3 style={{ color: project.previewColors.title }}>
              {project.name}
            </h3>
            <ComingSoon
              isComingSoon={project.isComingSoon}
              color={project.previewColors.subtitle}
            />
          </div>
          {isDetailShown ? (
            <p
              style={{ color: project.previewColors.title }}
              className={conditionalStyle(!isMobile, 'h4')}
            >
              {project.description}
            </p>
          ) : (
            <ProjectImages images={project.previewImages} />
          )}
          <Actions
            projectId={project.id}
            colors={project.previewColors.actions}
            onToggleDetails={handleToggleDetails}
            isDetailShown={isDetailShown}
          />
        </div>
      </div>
    </div>
  )
}
