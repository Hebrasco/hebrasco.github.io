import { Section } from 'components/ui'
import { PROJECTS, ROUTES } from 'data'
import { Preview } from 'pages/Home/components/Projects/components/Preview'
import { Container } from 'react-bootstrap'
import styles from './index.module.css'

export function Projects(): JSX.Element {
  return (
    <Container
      className={`mt-5 navbar-spacer bg-light ${styles['preview-container-container']}`}
      fluid
    >
      <Section anchor={ROUTES.projects} fluidContainer lg title="Projects">
        <div className={styles['preview-scroll-container']}>
          <div className={styles['preview-container']}>
            <div className={styles['preview-container-card-set']}>
              {PROJECTS.map((project) => (
                <Preview key={`project-${project.name}`} project={project} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}
