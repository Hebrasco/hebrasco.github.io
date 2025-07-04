import { BlankAppIcon } from 'assets/images/appIcons'
import horizontalListStyles from 'components/ui/HorizontalList/HorizontalList.module.css'
import { MISC, ROUTES } from 'data'
import { useColorScheme, useWindowSize } from 'hooks'
import { Badges } from 'pages/Home/components/Projects/components/Preview/Badges'
import { ProjectPreviewImage } from 'pages/Home/components/Projects/components/ProjectPreviewImage'
import { PROJECT_CONTAINER_SIZE } from 'pages/Home/components/Projects/constants'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { conditionalStyle } from 'utils'
import styles from './Preview.module.css'
import type { Project } from 'types'

interface Props {
  project: Project
}

function Preview({ project }: Props) {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light

  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm
  const width = isMobile ? PROJECT_CONTAINER_SIZE.xs.width : PROJECT_CONTAINER_SIZE.md.width
  const height = isMobile ? PROJECT_CONTAINER_SIZE.xs.height : PROJECT_CONTAINER_SIZE.md.height

  return (
    <Link
      className={`rounded ${horizontalListStyles['horizontal-list-content-container']} ${conditionalStyle(
        !isMobile,
        horizontalListStyles['horizontal-list-content-container-desktop']
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
          <Col
            className={`d-flex align-items-center ${styles['preview-content-header-container']}`}
          >
            <div className={`${styles['preview-content-app-icon']} me-3`}>
              <Image
                alt={`App icon of ${project.id}`}
                src={project.appIcon?.[isLightScheme ? 'light' : 'dark'] ?? BlankAppIcon}
              />
            </div>
            <span className="m-0 h4">{project.name}</span>
            <i className="bi bi-chevron-right ms-auto"></i>
          </Col>
        </Row>
      </div>
      <Badges frameworks={project.frameworks} languages={project.languages} />
      <ProjectPreviewImage image={project.previewImage} />
    </Link>
  )
}

export { Preview }
