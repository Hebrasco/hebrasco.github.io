import { MISC, PROJECTS } from 'data'
import ProjectImages from 'pages/Project/components/ProjectImages'
import { Responsibilities } from 'pages/Project/components/Responsibilities'
import React, { useMemo } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import projectStyles from 'pages/Home/components/Projects/index.module.css'
import previewStyles from 'pages/Home/components/Projects/components/Preview/index.module.css'
import { useColorScheme, useWindowSize } from 'hooks'
import { conditionalStyle } from 'utils'
import { ExternalLink, Section } from 'components/ui'
import { ProjectBadge } from 'pages/Home/components/Projects/components/ProjectBadge'
import { PROJECT_STATUS } from 'data/projectStatus'
import FEATURE_CONTAINER_SIZE from 'pages/Home/components/Projects/constants/FeatureContainerSize'

import styles from './index.module.css'

export function Project(): JSX.Element {
  const { projectId } = useParams()
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light
  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm

  const width = isMobile
    ? FEATURE_CONTAINER_SIZE.xs.width
    : FEATURE_CONTAINER_SIZE.md.width

  const height = isMobile
    ? FEATURE_CONTAINER_SIZE.xs.height
    : FEATURE_CONTAINER_SIZE.md.height

  const project = useMemo(
    () => PROJECTS.find(({ id }) => id === projectId),
    [projectId]
  )

  if (!projectId || !project) return <div>Project not found</div>

  return (
    <div className={styles['project-container']}>
      <Container className="mb-5">
        <Section>
          <div className="p-5 bg-light rounded d-flex">
            <Row>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <h1 className="fw-bold">{project.name}</h1>
                <div className="my-2 d-flex justify-content-space-between">
                  {project.onlineURL && (
                    <span className="d-inline-flex align-items-center">
                      <ExternalLink to={project.onlineURL}>
                        App Store
                      </ExternalLink>
                      <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
                    </span>
                  )}
                  {project.sourceURL && (
                    <span className="d-inline-flex align-items-center">
                      <ExternalLink to={project.sourceURL}>
                        Source Code
                      </ExternalLink>
                      <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
                    </span>
                  )}
                </div>
                <Col className="d-flex d-md-none my-5">
                  <ProjectImages image={project.titleImage} />
                </Col>
              </Col>
              <Col
                md={6}
                className="align-items-center align-items-lg-end d-none d-md-flex"
              >
                <ProjectImages image={project.titleImage} />
              </Col>
            </Row>
          </div>
        </Section>
      </Container>
      <Container className="my-5">
        <Row className="g-4">
          <Col md={3} xs={6}>
            <Section xs title="Frameworks">
              <div className="d-flex flex-wrap gap-2">
                {project.frameworks.map((framework: any) => (
                  <ProjectBadge
                    skill={framework}
                    key={`project-skill-framework-${framework.name}`}
                  />
                ))}
              </div>
            </Section>
          </Col>
          <Col md={3} xs={6}>
            <Section xs title="Languages">
              <div className="d-flex flex-wrap gap-2">
                {project.languages.map((language: any) => (
                  <ProjectBadge
                    skill={language}
                    key={`project-skill-language-${language.name}`}
                  />
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
            <Section xs title="Platforms">
              <p>{project.platforms.join(', ')}</p>
            </Section>
          </Col>
          <Col md={3} xs={6}>
            <Section
              xs
              title={
                project.status.type === PROJECT_STATUS.comingSoon
                  ? PROJECT_STATUS.launched
                  : project.status.type
              }
            >
              <p>
                {project.status.date?.toLocaleDateString() ??
                  project.status.type}
              </p>
            </Section>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Section title="Summary">
          <p>{project.description}</p>
        </Section>
      </Container>
      <Container fluid className="my-5">
        <Section title="Features" fluidContainer>
          <div className={projectStyles['preview-scroll-container']}>
            <div className={projectStyles['preview-container']}>
              <div className={projectStyles['preview-container-card-set']}>
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`rounded ${previewStyles['preview-content-container']} bg-light`}
                    style={{
                      justifyContent: 'flex-start',
                      width,
                      height,
                      scrollSnapAlign: conditionalStyle(
                        isMobile,
                        'center',
                        'start'
                      ),
                    }}
                  >
                    <i
                      className={`${feature.icon} h1`}
                      style={{ marginBottom: 15 }}
                    ></i>
                    <p
                      className={`${conditionalStyle(
                        isMobile,
                        'h4',
                        'h3'
                      )} fw-bold`}
                    >
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
      {project.screenshots && (
        <Container fluid className="my-5">
          <Section fluidContainer title="Screenshots">
            <div className={projectStyles['preview-scroll-container']}>
              <div className={projectStyles['preview-container']}>
                <div className={projectStyles['preview-container-card-set']}>
                  {project.screenshots?.[isLightScheme ? 'light' : 'dark'].map(
                    (screenshot, index) => (
                      <div
                        key={index}
                        className={`${previewStyles['preview-content-container']} p-0`}
                        style={{
                          justifyContent: 'flex-start',
                          width,
                          scrollSnapAlign: conditionalStyle(
                            isMobile,
                            'center',
                            'start'
                          ),
                          backgroundColor: 'unset',
                        }}
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.altText}
                          loading="lazy"
                        />
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
