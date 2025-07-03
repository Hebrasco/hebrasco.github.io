import { ExternalLink, Section } from 'components/ui'
import { MISC, PROJECTS } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import { useColorScheme, useWindowSize } from 'hooks'
import previewStyles from 'pages/Home/components/Projects/components/Preview/index.module.css'
import { ProjectBadge } from 'pages/Home/components/Projects/components/ProjectBadge'
import FEATURE_CONTAINER_SIZE from 'pages/Home/components/Projects/constants/FeatureContainerSize'
import SCREENSHOT_CONTAINER_SIZE from 'pages/Home/components/Projects/constants/ScreenshotContainerSize'
import projectStyles from 'pages/Home/components/Projects/index.module.css'
import ProjectImages from 'pages/Project/components/ProjectImages'
import { useLayoutEffect, useMemo, useState } from 'react'
import { Col, Container, Dropdown, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { conditionalStyle } from 'utils'

export function Project() {
  const [scrollSnapAlign, setScrollSnapAlign] = useState('start')
  const [platformScreenshots, setPlatformScreenshots] = useState<keyof typeof PLATFORM>('iphone')
  const { projectId } = useParams()
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light
  const { isXs, isSm } = useWindowSize()
  const isMobile = useMemo(() => isXs || isSm, [isXs, isSm])

  const screenshotSizes: {
    [K in keyof typeof PLATFORM]: {
      height: number
      width: number
    }
  } = {
    ipad: isMobile ? SCREENSHOT_CONTAINER_SIZE.ipad.xs : SCREENSHOT_CONTAINER_SIZE.ipad.md,
    iphone: isMobile ? SCREENSHOT_CONTAINER_SIZE.iphone.xs : SCREENSHOT_CONTAINER_SIZE.iphone.md,
    mac: isMobile ? SCREENSHOT_CONTAINER_SIZE.mac.xs : SCREENSHOT_CONTAINER_SIZE.mac.md,
    web: isMobile ? SCREENSHOT_CONTAINER_SIZE.web.xs : SCREENSHOT_CONTAINER_SIZE.web.md,
  }

  const featureWidth = isMobile ? FEATURE_CONTAINER_SIZE.xs.width : FEATURE_CONTAINER_SIZE.md.width
  const featureHeight = isMobile
    ? FEATURE_CONTAINER_SIZE.xs.height
    : FEATURE_CONTAINER_SIZE.md.height

  const project = useMemo(() => PROJECTS.find(({ id }) => id === projectId), [projectId])

  useLayoutEffect(() => {
    setScrollSnapAlign(conditionalStyle(isMobile, 'center', 'start'))
  }, [isMobile])

  if (!projectId || !project) return <div>Project not found</div>

  return (
    <div className="navbar-spacer">
      <Container>
        <Section>
          <div className="p-5 bg-light rounded d-flex">
            <Row>
              <Col className="d-flex flex-column justify-content-center" md={6}>
                <h1 className="fw-bold">{project.name}</h1>
                <div className="my-2 d-flex">
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
                <Col className="d-flex d-md-none mt-4">
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
      <Container>
        <Section md>
          <Row className="g-4">
            <Col md={3} xs={6}>
              <p
                className="fw-bold text-uppercase"
                style={{ fontSize: 20, marginBottom: '0.5rem' }}
              >
                Frameworks
              </p>
              <div className="d-flex flex-wrap gap-2">
                {project.frameworks.map((framework) => (
                  <ProjectBadge
                    key={`project-skill-framework-${framework.name}`}
                    skill={framework}
                  />
                ))}
              </div>
            </Col>
            <Col md={3} xs={6}>
              <p
                className="fw-bold text-uppercase"
                style={{ fontSize: 20, marginBottom: '0.5rem' }}
              >
                Languages
              </p>
              <div className="d-flex flex-wrap gap-2">
                {project.languages.map((language) => (
                  <ProjectBadge key={`project-skill-language-${language.name}`} skill={language} />
                ))}
              </div>
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
              <p
                className="fw-bold text-uppercase"
                style={{ fontSize: 20, marginBottom: '0.5rem' }}
              >
                Platforms
              </p>
              <p>{project.platforms.join(', ')}</p>
            </Col>
            <Col md={3} xs={6}>
              <p
                className="fw-bold text-uppercase"
                style={{ fontSize: 20, marginBottom: '0.5rem' }}
              >
                {project.status.type === PROJECT_STATUS.comingSoon
                  ? PROJECT_STATUS.launched
                  : project.status.type}
              </p>
              <p>{project.status.date?.toLocaleDateString() ?? project.status.type}</p>
            </Col>
          </Row>
        </Section>
      </Container>
      <Container>
        <Section lg title="Summary">
          <p>{project.description}</p>
        </Section>
      </Container>
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
      {project.screenshots && !!Object.values(project.screenshots).filter(Boolean).length && (
        <Container fluid>
          <Section
            Action={() =>
              Object.values(project.screenshots ?? {}).filter(Boolean).length > 1 ? (
                <Dropdown>
                  <Dropdown.Toggle className="btn-link">
                    {PLATFORM[platformScreenshots]}
                    <i className="bi bi-chevron-down ms-1"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end" className="shadow">
                    <p className="text-muted">Platform</p>
                    {(Object.keys(project.screenshots ?? {}) as [keyof typeof PLATFORM])
                      .sort((a) => {
                        if (a === 'iphone') return -1
                        if (a === 'ipad') return 1
                        if (a === 'mac') return 1
                        if (a === 'web') return 1

                        return 0
                      })
                      .map((platform) => (
                        <Dropdown.Item
                          as="button"
                          key={`platform-dropdown-item-${platform}`}
                          onClick={() => setPlatformScreenshots(platform)}
                        >
                          <i
                            className={`bi bi-check-circle-fill me-2 ${conditionalStyle(platformScreenshots === platform, 'visible', 'invisible')}`}
                          ></i>
                          {PLATFORM[platform]}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : null
            }
            fluidContainer
            lg
            title="Screenshots"
          >
            <div
              className={projectStyles['preview-scroll-container']}
              key={`screenshot-container-${platformScreenshots}`}
            >
              <div className={projectStyles['preview-container']}>
                <div className={projectStyles['preview-container-card-set']}>
                  {project.screenshots[platformScreenshots]?.[isLightScheme ? 'light' : 'dark'].map(
                    (screenshot, index) => (
                      <div
                        className={`${previewStyles['preview-content-container']} p-0`}
                        // biome-ignore lint/suspicious/noArrayIndexKey: No other key available
                        key={`${platformScreenshots}-screenshot-${index}`}
                        style={{
                          backgroundColor: 'unset',
                          height: screenshotSizes[platformScreenshots].height,
                          justifyContent: 'flex-start',
                          scrollSnapAlign,
                          width: screenshotSizes[platformScreenshots].width,
                        }}
                      >
                        <Image alt={screenshot.altText} src={screenshot.src} />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Section>
        </Container>
      )}
    </div>
  )
}
