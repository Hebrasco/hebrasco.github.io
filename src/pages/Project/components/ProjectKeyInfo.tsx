import { Column, Container, Row } from 'components/layout'
import { Section } from 'components/ui'
import { KeyInfoTitle } from 'components/ui/KeyInfoTitle'
import { PROJECT_STATUS } from 'data'
import { ProjectBadge } from 'pages/Home/components/Projects/components/ProjectBadge'
import { useProject } from 'pages/Project/hooks/useProject'

function ProjectKeyInfo() {
  const { project } = useProject()

  return (
    <Container>
      <Section md>
        <Row className="gap-4">
          <Column md={3} xs={6}>
            <KeyInfoTitle title="Frameworks" />
            <div className="d-flex flex-wrap gap-2">
              {project.frameworks.map((framework) => (
                <ProjectBadge key={`project-skill-framework-${framework.name}`} skill={framework} />
              ))}
            </div>
          </Column>
          <Column md={3} xs={6}>
            <KeyInfoTitle title="Languages" />
            <div className="d-flex flex-wrap gap-2">
              {project.languages.map((language) => (
                <ProjectBadge key={`project-skill-language-${language.name}`} skill={language} />
              ))}
            </div>
          </Column>
          <Column md={3} xs={6}>
            <KeyInfoTitle title="Platforms" />
            <p>{project.platforms.join(', ')}</p>
          </Column>
          <Column md={3} xs={6}>
            <KeyInfoTitle
              title={
                project.status.type === PROJECT_STATUS.comingSoon
                  ? PROJECT_STATUS.launched
                  : project.status.type
              }
            />
            <p>{project.status.date?.toLocaleDateString() ?? project.status.type}</p>
          </Column>
        </Row>
      </Section>
    </Container>
  )
}

export { ProjectKeyInfo }
