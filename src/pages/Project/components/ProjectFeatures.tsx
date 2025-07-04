import { Section } from 'components/ui'
import { useScrollSnapAlign, useWindowSize } from 'hooks'
import previewStyles from 'pages/Home/components/Projects/components/Preview/index.module.css'
import FEATURE_CONTAINER_SIZE from 'pages/Home/components/Projects/constants/FeatureContainerSize'
import projectStyles from 'pages/Home/components/Projects/index.module.css'
import { useProject } from 'pages/Project/hooks/useProject'
import { useMemo } from 'react'
import { Container } from 'react-bootstrap'
import { conditionalStyle } from 'utils'

function ProjectFeatures() {
  const { project } = useProject()
  const scrollSnapAlign = useScrollSnapAlign()
  const { isXs, isSm } = useWindowSize()
  const isMobile = useMemo(() => isXs || isSm, [isXs, isSm])
  const featureWidth = isMobile ? FEATURE_CONTAINER_SIZE.xs.width : FEATURE_CONTAINER_SIZE.md.width
  const featureHeight = isMobile
    ? FEATURE_CONTAINER_SIZE.xs.height
    : FEATURE_CONTAINER_SIZE.md.height

  return (
    <Container fluid>
      <Section fluidContainer lg title="Features">
        <div className={projectStyles['preview-scroll-container']}>
          <div className={projectStyles['preview-container']}>
            <div className={projectStyles['preview-container-card-set']}>
              {project.features.map((feature, index) => (
                <div
                  className={`rounded ${previewStyles['preview-content-container']} bg-light`}
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
                  <p className={`${conditionalStyle(isMobile, 'h4', 'h3')} fw-bold`}>
                    {feature.title}
                  </p>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export { ProjectFeatures }
