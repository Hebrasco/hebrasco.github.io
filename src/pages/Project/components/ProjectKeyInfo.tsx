import { Section } from 'components/ui'
import { KeyInfoTitle } from 'components/ui/KeyInfoTitle'
import { PROJECT_STATUS } from 'data/projectStatus'
import { ProjectBadge } from 'pages/Home/components/Projects/components/ProjectBadge'
import { useProject } from 'pages/Project/hooks/useProject'
import { Col, Container, Row } from 'react-bootstrap'

function ProjectKeyInfo() {
  const { project } = useProject()

  return (
    <Container>
      <Section md>
        <Row className="g-4">
          <Col md={3} xs={6}>
            <KeyInfoTitle title="Frameworks" />
            <div className="d-flex flex-wrap gap-2">
              {project.frameworks.map((framework) => (
                <ProjectBadge key={`project-skill-framework-${framework.name}`} skill={framework} />
              ))}
            </div>
          </Col>
          <Col md={3} xs={6}>
            <KeyInfoTitle title="Languages" />
            <div className="d-flex flex-wrap gap-2">
              {project.languages.map((language) => (
                <ProjectBadge key={`project-skill-language-${language.name}`} skill={language} />
              ))}
            </div>
          </Col>
          <Col md={3} xs={6}>
            <KeyInfoTitle title="Platforms" />
            <p>{project.platforms.join(', ')}</p>
          </Col>
          <Col md={3} xs={6}>
            <KeyInfoTitle
              title={
                project.status.type === PROJECT_STATUS.comingSoon
                  ? PROJECT_STATUS.launched
                  : project.status.type
              }
            />
            <p>{project.status.date?.toLocaleDateString() ?? project.status.type}</p>
          </Col>
        </Row>
      </Section>
    </Container>
  )
}

export { ProjectKeyInfo }
