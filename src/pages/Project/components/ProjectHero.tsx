import { Column, Container, Row } from 'components/layout'
import { ExternalLink, Section } from 'components/ui'
import { useWindowSize } from 'hooks'
import { ProjectTitleImage } from 'pages/Project/components/ProjectTitleImage'
import { useProject } from 'pages/Project/hooks/useProject'
import { conditionalStyle } from 'utils'

function ProjectHero() {
  const { project } = useProject()
  const { isMobile } = useWindowSize()

  return (
    <Container>
      <Section>
        <div className="p-5 primary-bg rounded d-flex">
          <Row gap={isMobile ? 0 : 3}>
            <Column className="d-flex flex-column justify-content-center" md={6}>
              <h1 className="fw-bold mb-2">{project.name}</h1>
              {!isMobile && (
                <div className="d-flex">
                  {project.onlineURL && (
                    <span className="d-inline-flex align-items-center">
                      <ExternalLink to={project.onlineURL}>App Store</ExternalLink>
                      <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
                    </span>
                  )}
                  {project.sourceURL && (
                    <span className="d-inline-flex align-items-center">
                      <ExternalLink to={project.sourceURL}>Source Code</ExternalLink>
                      <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
                    </span>
                  )}
                </div>
              )}
            </Column>
            <Column className={conditionalStyle(isMobile, 'mt-4')} md={6}>
              <ProjectTitleImage />
            </Column>
            {isMobile && (
              <Column className="mt-5">
                <div className="d-flex">
                  {project.onlineURL && (
                    <span className="d-inline-flex align-items-center">
                      <ExternalLink to={project.onlineURL}>App Store</ExternalLink>
                      <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
                    </span>
                  )}
                  {project.sourceURL && (
                    <span className="d-inline-flex align-items-center">
                      <ExternalLink to={project.sourceURL}>Source Code</ExternalLink>
                      <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
                    </span>
                  )}
                </div>
              </Column>
            )}
          </Row>
        </div>
      </Section>
    </Container>
  )
}

export { ProjectHero }
