import { BlankAppIcon } from 'assets/images/appIcons'
import { MISC, ROUTES } from 'data'
import { useColorScheme, useWindowSize } from 'hooks'
import { ProjectPreviewImage } from 'pages/Home/components/Projects/components/ProjectPreviewImage'
import { PROJECT_CONTAINER_SIZE } from 'pages/Home/components/Projects/constants'
import { Badges } from 'pages/Project/components/Badges'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { conditionalStyle } from 'utils'
import styles from './index.module.css'
import type { Project } from 'types'

interface Props {
  project: Project
}

export function Preview({ project }: Props) {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light

  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm
  const width = isMobile ? PROJECT_CONTAINER_SIZE.xs.width : PROJECT_CONTAINER_SIZE.md.width
  const height = isMobile ? PROJECT_CONTAINER_SIZE.xs.height : PROJECT_CONTAINER_SIZE.md.height

  return (
    <Link
      className={`rounded ${styles['preview-content-container']} ${conditionalStyle(
        !isMobile,
        styles['preview-content-container-desktop']
      )} overflow-hidden text-decoration-none`}
      style={{
        height,
        scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
        width,
      }}
      to={ROUTES.project.replace(':projectId', project.id)}
    >
      <div className="mb-auto">
        <Row>
          <Col className="d-flex align-items-center">
            <div className={`${styles['preview-content-app-icon']} me-3`}>
              <Image
                alt={`App icon of ${project.id}`}
                src={project.appIcon?.[isLightScheme ? 'light' : 'dark'] ?? BlankAppIcon}
              />
            </div>
            <div>
              <h3 className="m-0">{project.name}</h3>
            </div>
            <i className="bi bi-chevron-right ms-auto"></i>
          </Col>
        </Row>
      </div>
      <Badges frameworks={project.frameworks} languages={project.languages} />
      <ProjectPreviewImage image={project.previewImage} />
    </Link>
  )
}
