import { Container } from 'components/layout'
import { Section } from 'components/ui'
import { HorizontalList } from 'components/ui/HorizontalList'
import horizontalListStyles from 'components/ui/HorizontalList/HorizontalList.module.css'
import { useScrollSnapAlign, useWindowSize } from 'hooks'
import { FEATURE_CONTAINER_SIZE } from 'pages/Project/constants'
import { useProject } from 'pages/Project/hooks/useProject'
import { conditionalStyle } from 'utils'

function ProjectFeatures() {
  const { project } = useProject()
  const scrollSnapAlign = useScrollSnapAlign()
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
            <li
              className={`rounded ${horizontalListStyles['horizontal-list-content-container']} bg-light`}
              // biome-ignore lint/suspicious/noArrayIndexKey: No other key available
              key={index}
              style={{
                height: featureHeight,
                justifyContent: 'flex-start',
                scrollSnapAlign,
                width: featureWidth,
              }}
            >
              <i className={`${feature.icon} h1`} style={{ marginBottom: 15 }}></i>
              <p className={`${conditionalStyle(isMobile, 'h4', 'h3')} fw-bold`}>{feature.title}</p>
              <p>{feature.description}</p>
            </li>
          ))}
        </HorizontalList>
      </Section>
    </Container>
  )
}

export { ProjectFeatures }
