import { ExternalLink, Section } from 'components/ui'
import { ProjectTitleImage } from 'pages/Project/components/ProjectTitleImage'
import { useProject } from 'pages/Project/hooks/useProject'
import { Col, Container, Row } from 'react-bootstrap'

function ProjectHero() {
  const { project } = useProject()

  return (
    <Container>
      <Section>
        <div className="p-5 bg-light rounded d-flex">
          <Row>
            <Col className="d-flex flex-column justify-content-center" md={6}>
              <h1 className="fw-bold">{project.name}</h1>
              <div className="my-2 d-flex">
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
              <Col className="d-flex d-md-none mt-4">
                <ProjectTitleImage />
              </Col>
            </Col>
            <Col className="d-none d-md-flex" md={6}>
              <ProjectTitleImage />
            </Col>
          </Row>
        </div>
      </Section>
    </Container>
  )
}

export { ProjectHero }
