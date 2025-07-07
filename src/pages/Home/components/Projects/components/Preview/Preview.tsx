import { BlankAppIcon } from 'assets/images/appIcons'
import { Column, Row } from 'components/layout'
import { ROUTES } from 'data'
import { useColorScheme, useWindowSize } from 'hooks'
import { Badges } from 'pages/Home/components/Projects/components/Preview/Badges'
import { ProjectPreviewImage } from 'pages/Home/components/Projects/components/ProjectPreviewImage'
import { PROJECT_CONTAINER_SIZE } from 'pages/Home/components/Projects/constants'
import { Link } from 'react-router-dom'
import styles from './Preview.module.css'
import type { Project } from 'types'

interface Props {
  project: Project
}

function Preview({ project }: Props) {
  const { colorScheme } = useColorScheme()

  const { isMobile } = useWindowSize()
  const width = isMobile ? PROJECT_CONTAINER_SIZE.xs.width : PROJECT_CONTAINER_SIZE.md.width
  const height = isMobile ? PROJECT_CONTAINER_SIZE.xs.height : PROJECT_CONTAINER_SIZE.md.height

  return (
    <Link
      className="rounded"
      style={{
        height,
        width,
      }}
      to={ROUTES.project.replace(':projectId', project.id)}
    >
      <div className={styles['preview-container']}>
        <div className="mb-auto">
          <Row>
            <Column
              className={`d-flex align-items-center ${styles['preview-content-header-container']}`}
            >
              <div className={`${styles['preview-content-app-icon']} me-3`}>
                <img
                  alt={`App icon of ${project.id}`}
                  height="100%"
                  src={project.appIcon?.[colorScheme] ?? BlankAppIcon}
                  width="100%"
                />
              </div>
              <span className="display-4">{project.name}</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Column>
          </Row>
        </div>
        <Badges frameworks={project.frameworks} languages={project.languages} />
        <ProjectPreviewImage image={project.previewImage} />
      </div>
    </Link>
  )
}

export { Preview }
