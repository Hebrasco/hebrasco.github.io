import { Section } from 'components/ui'
import { useProject } from 'pages/Project/hooks/useProject'
import { Container } from 'react-bootstrap'

function ProjectDescription() {
  const { project } = useProject()

  return (
    <Container>
      <Section lg title="Summary">
        <p>{project.description}</p>
      </Section>
    </Container>
  )
}

export { ProjectDescription }
