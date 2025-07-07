import { Container } from 'components/layout'
import { Section } from 'components/ui'
import { useProject } from 'pages/Project/hooks/useProject'

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
