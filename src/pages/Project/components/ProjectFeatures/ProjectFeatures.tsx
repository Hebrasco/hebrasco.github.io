import { Container } from 'components/layout'
import { Section } from 'components/ui'
import { HorizontalList } from 'components/ui/HorizontalList'
import { ListContainer } from 'components/ui/HorizontalList/ListContainer'
import { useWindowSize } from 'hooks'
import { FEATURE_CONTAINER_SIZE } from 'pages/Project/constants'
import { useProject } from 'pages/Project/hooks/useProject'
import { conditionalStyle } from 'utils'
import styles from './ProjectFeatures.module.css'

function ProjectFeatures() {
  const { project } = useProject()
  const { isMobile } = useWindowSize()

  const featureWidth = isMobile ? FEATURE_CONTAINER_SIZE.xs.width : FEATURE_CONTAINER_SIZE.md.width
  const featureHeight = isMobile
    ? FEATURE_CONTAINER_SIZE.xs.height
    : FEATURE_CONTAINER_SIZE.md.height

  return (
    <Container fluid>
      <Section fluidContainer lg title="Features">
        <HorizontalList>
          {project.features.map((feature, index) => (
            <ListContainer
              // biome-ignore lint/suspicious/noArrayIndexKey: No other key available
              key={index}
            >
              <div
                className="rounded primary-bg"
                style={{
                  height: featureHeight,
                  justifyContent: 'flex-start',
                  width: featureWidth,
                }}
              >
                <div className={styles.container}>
                  <i className={`${feature.icon} display-1`} style={{ marginBottom: 15 }}></i>
                  <p className={`${conditionalStyle(isMobile, 'display-4', 'display-3')} fw-bold`}>
                    {feature.title}
                  </p>
                  <p>{feature.description}</p>
                </div>
              </div>
            </ListContainer>
          ))}
        </HorizontalList>
      </Section>
    </Container>
  )
}

export { ProjectFeatures }
