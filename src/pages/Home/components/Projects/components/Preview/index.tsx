import React from 'react'

import { Project } from 'types'
import { conditionalStyle } from 'utils'
import { useColorScheme, useWindowSize } from 'hooks'
import { PROJECT_CONTAINER_SIZE } from 'pages/Home/components/Projects/constants'

import styles from './index.module.css'
import { MISC, ROUTES } from 'data'
import { ProjectPreviewImage } from 'pages/Home/components/Projects/components/ProjectPreviewImage'
import { Badges } from 'pages/Project/components/Badges'
import { Col, Image, Row } from 'react-bootstrap'
import { BlankAppIcon } from 'assets/images/appIcons'
import { Link } from 'react-router-dom'

interface Props {
  project: Project
}

export function Preview({ project }: Props): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light

  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm
  const width = isMobile
    ? PROJECT_CONTAINER_SIZE.xs.width
    : PROJECT_CONTAINER_SIZE.md.width
  const height = isMobile
    ? PROJECT_CONTAINER_SIZE.xs.height
    : PROJECT_CONTAINER_SIZE.md.height

  return (
    <Link
      to={ROUTES.project.replace(':projectId', project.id)}
      className={`rounded ${
        styles['preview-content-container']
      } ${conditionalStyle(
        !isMobile,
        styles['preview-content-container-desktop']
      )} overflow-hidden text-decoration-none`}
      style={{
        width,
        height,
        scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
      }}
    >
      <div className="mb-auto">
        <Row>
          <Col className="d-flex align-items-center">
            <div className={`${styles['preview-content-app-icon']} me-3`}>
              <Image
                src={
                  project.appIcon?.[isLightScheme ? 'light' : 'dark'] ??
                  BlankAppIcon
                }
                alt={`App icon of ${project.id}`}
              />
            </div>
            <div>
              <h3 className="m-0">{project.name}</h3>
            </div>
            <i className="bi bi-chevron-right ms-auto"></i>
          </Col>
        </Row>
      </div>
      <Badges languages={project.languages} frameworks={project.frameworks} />
      <ProjectPreviewImage image={project.previewImage} />
    </Link>
  )
}
