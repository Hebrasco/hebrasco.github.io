import { ExternalLink, Section } from 'components/ui'
import { MISC, PROJECTS } from 'data'
import { PROJECT_STATUS } from 'data/projectStatus'
import { useColorScheme, useWindowSize } from 'hooks'
import previewStyles from 'pages/Home/components/Projects/components/Preview/index.module.css'
import { ProjectBadge } from 'pages/Home/components/Projects/components/ProjectBadge'
import FEATURE_CONTAINER_SIZE from 'pages/Home/components/Projects/constants/FeatureContainerSize'
import SCREENSHOT_CONTAINER_SIZE from 'pages/Home/components/Projects/constants/ScreenshotContainerSize'
import projectStyles from 'pages/Home/components/Projects/index.module.css'
import ProjectImages from 'pages/Project/components/ProjectImages'
import { useMemo } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { conditionalStyle } from 'utils'
import styles from './index.module.css'

export function Project(): JSX.Element {
  const { projectId } = useParams()
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light
  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm

  const screenshotIphoneWidth = isMobile
    ? SCREENSHOT_CONTAINER_SIZE.iphone.xs.width
    : SCREENSHOT_CONTAINER_SIZE.iphone.md.width
  const screenshotIpadWidth = isMobile
    ? SCREENSHOT_CONTAINER_SIZE.ipad.xs.width
    : SCREENSHOT_CONTAINER_SIZE.ipad.md.width
  const screenshotMacWidth = isMobile
    ? SCREENSHOT_CONTAINER_SIZE.mac.xs.width
    : SCREENSHOT_CONTAINER_SIZE.mac.md.width
  const screenshotWebWidth = isMobile
    ? SCREENSHOT_CONTAINER_SIZE.web.xs.width
    : SCREENSHOT_CONTAINER_SIZE.web.md.width
  const featureWidth = isMobile ? FEATURE_CONTAINER_SIZE.xs.width : FEATURE_CONTAINER_SIZE.md.width
  const featureHeight = isMobile
    ? FEATURE_CONTAINER_SIZE.xs.height
    : FEATURE_CONTAINER_SIZE.md.height

  const project = useMemo(() => PROJECTS.find(({ id }) => id === projectId), [projectId])

  if (!projectId || !project) return <div>Project not found</div>

  return (
    <div className={styles['project-container']}>
      <Container className="mb-5">
        <Section>
          <div className="p-5 bg-light rounded d-flex">
            <Row>
              <Col className="d-flex flex-column justify-content-center" md={6}>
                <h1 className="fw-bold">{project.name}</h1>
                <div className="my-2 d-flex justify-content-space-between">
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
                <Col className="d-flex d-md-none my-5">
                  <ProjectImages image={project.titleImage} />
                </Col>
              </Col>
              <Col className="align-items-center align-items-lg-end d-none d-md-flex" md={6}>
                <ProjectImages image={project.titleImage} />
              </Col>
            </Row>
          </div>
        </Section>
      </Container>
      <Container className="my-5">
        <Row className="g-4">
          <Col md={3} xs={6}>
            <Section title="Frameworks" xs>
              <div className="d-flex flex-wrap gap-2">
                {project.frameworks.map((framework) => (
                  <ProjectBadge
                    key={`project-skill-framework-${framework.name}`}
                    skill={framework}
                  />
                ))}
              </div>
            </Section>
          </Col>
          <Col md={3} xs={6}>
            <Section title="Languages" xs>
              <div className="d-flex flex-wrap gap-2">
                {project.languages.map((language) => (
                  <ProjectBadge key={`project-skill-language-${language.name}`} skill={language} />
                ))}
              </div>
            </Section>
          </Col>
          {/* <Col md={3}>
            <Section xs title="Responsibilities">
              <Responsibilities
                projectName={project.name}
                tasks={project.tasks}
              />
            </Section>
          </Col> */}
          <Col md={3} xs={6}>
            <Section title="Platforms" xs>
              <p>{project.platforms.join(', ')}</p>
            </Section>
          </Col>
          <Col md={3} xs={6}>
            <Section
              title={
                project.status.type === PROJECT_STATUS.comingSoon
                  ? PROJECT_STATUS.launched
                  : project.status.type
              }
              xs
            >
              <p>{project.status.date?.toLocaleDateString() ?? project.status.type}</p>
            </Section>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Section title="Summary">
          <p>{project.description}</p>
        </Section>
      </Container>
      <Container className="my-5" fluid>
        <Section fluidContainer title="Features">
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
                      scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
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
      {project.screenshots && !!Object.values(project.screenshots).filter(Boolean).length && (
        <Container className="my-5" fluid>
          <Section fluidContainer title="Screenshots">
            {project.screenshots?.iphone && (
              <Section fluidContainer sm title="iPhone">
                <div className={projectStyles['preview-scroll-container']}>
                  <div className={projectStyles['preview-container']}>
                    <div className={projectStyles['preview-container-card-set']}>
                      {project.screenshots.iphone[isLightScheme ? 'light' : 'dark'].map(
                        (screenshot, index) => (
                          <div
                            className={`${previewStyles['preview-content-container']} p-0`}
                            // biome-ignore lint/suspicious/noArrayIndexKey: No other key available
                            key={`iphone-screenshot-${index}`}
                            style={{
                              backgroundColor: 'unset',
                              justifyContent: 'flex-start',
                              scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
                              width: screenshotIphoneWidth,
                            }}
                          >
                            <Image alt={screenshot.altText} loading="lazy" src={screenshot.src} />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Section>
            )}
            {project.screenshots?.ipad && (
              <Section fluidContainer sm title="iPad">
                <div className={projectStyles['preview-scroll-container']}>
                  <div className={projectStyles['preview-container']}>
                    <div className={projectStyles['preview-container-card-set']}>
                      {project.screenshots.ipad[isLightScheme ? 'light' : 'dark'].map(
                        (screenshot, index) => (
                          <div
                            className={`${previewStyles['preview-content-container']} p-0`}
                            // biome-ignore lint/suspicious/noArrayIndexKey: No other key available
                            key={`ipad-screenshot-${index}`}
                            style={{
                              backgroundColor: 'unset',
                              justifyContent: 'flex-start',
                              scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
                              width: screenshotIpadWidth,
                            }}
                          >
                            <Image alt={screenshot.altText} loading="lazy" src={screenshot.src} />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Section>
            )}
            {project.screenshots?.mac && (
              <Section fluidContainer sm title="Mac">
                <div className={projectStyles['preview-scroll-container']}>
                  <div className={projectStyles['preview-container']}>
                    <div className={projectStyles['preview-container-card-set']}>
                      {project.screenshots.mac[isLightScheme ? 'light' : 'dark'].map(
                        (screenshot, index) => (
                          <div
                            className={`${previewStyles['preview-content-container']} p-0`}
                            // biome-ignore lint/suspicious/noArrayIndexKey: No other key available
                            key={`mac-screenshot-${index}`}
                            style={{
                              backgroundColor: 'unset',
                              justifyContent: 'flex-start',
                              scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
                              width: screenshotMacWidth,
                            }}
                          >
                            <Image alt={screenshot.altText} loading="lazy" src={screenshot.src} />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Section>
            )}
            {project.screenshots?.web && (
              <Section fluidContainer sm title="Web">
                <div className={projectStyles['preview-scroll-container']}>
                  <div className={projectStyles['preview-container']}>
                    <div className={projectStyles['preview-container-card-set']}>
                      {project.screenshots.web[isLightScheme ? 'light' : 'dark'].map(
                        (screenshot, index) => (
                          <div
                            className={`${previewStyles['preview-content-container']} p-0`}
                            // biome-ignore lint/suspicious/noArrayIndexKey: No other key available
                            key={`web-screenshot-${index}`}
                            style={{
                              backgroundColor: 'unset',
                              justifyContent: 'flex-start',
                              scrollSnapAlign: conditionalStyle(isMobile, 'center', 'start'),
                              width: screenshotWebWidth,
                            }}
                          >
                            <Image alt={screenshot.altText} loading="lazy" src={screenshot.src} />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Section>
            )}
          </Section>
        </Container>
      )}
    </div>
  )
}
