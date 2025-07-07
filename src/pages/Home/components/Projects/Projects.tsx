import { Container } from 'components/layout'
import { Section } from 'components/ui'
import { HorizontalList } from 'components/ui/HorizontalList'
import { ListContainer } from 'components/ui/HorizontalList/ListContainer'
import { PROJECTS, ROUTES } from 'data'
import { Preview } from 'pages/Home/components/Projects/components/Preview'
import styles from './Projects.module.css'

function Projects() {
  return (
    <Container className={`primary-bg ${styles['preview-container-container']}`} fluid>
      <Section anchor={ROUTES.projects} fluidContainer lg title="Projects">
        <HorizontalList>
          {PROJECTS.map((project) => (
            <ListContainer className="rounded" enableScaling key={`project-${project.name}`}>
              <Preview project={project} />
            </ListContainer>
          ))}
        </HorizontalList>
      </Section>
    </Container>
  )
}

export { Projects }
