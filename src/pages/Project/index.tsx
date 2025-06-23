import { PROJECTS } from 'data'
import { ComingSoon } from 'pages/Home/components/Projects/components/Preview/components'
import { Action } from 'pages/Home/components/Projects/components/ProjectAction'
import { Badges } from 'pages/Project/components/Badges'
import ProjectImages from 'pages/Project/components/ProjectImages'
import { Responsibilities } from 'pages/Project/components/Responsibilities'
import React, { useMemo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import projectStyles from 'pages/Home/components/Projects/index.module.css'
import previewStyles from 'pages/Home/components/Projects/components/Preview/index.module.css'
import { useWindowSize } from 'hooks'
import { conditionalStyle } from 'utils'

import styles from './index.module.css'

export function Project(): JSX.Element {
  const { projectId } = useParams()
  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm

  const width = isMobile ? 260 : 350

  const height = isMobile ? 281 : 256

  const project = useMemo(
    () => PROJECTS.find(({ id }) => id === projectId),
    [projectId]
  )

  if (!projectId || !project) return <div>Project not found</div>

  return (
    <div className={styles['project-container']}>
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="fw-bold">{project.name}</h1>
            <ComingSoon isComingSoon={project.isComingSoon} />
            <Badges
              languages={project.languages}
              frameworks={project.frameworks}
            />
          </Col>
        </Row>
        <div className="p-5 bg-light rounded d-flex">
          <Row>
            <Col md={6} className="d-flex flex-column">
              <Col className="d-flex d-md-none mt-4 mb-5">
                <ProjectImages images={project.previewImages} />
              </Col>
              <p>{project.description}</p>
              <Responsibilities
                projectName={project.name}
                tasks={project.tasks}
              />
              <div className="mt-auto d-flex justify-content-space-between">
                {project.onlineURL && (
                  <Action filled to={project.onlineURL} label={'App Store'} />
                )}
                {project.sourceURL && (
                  <Action to={project.sourceURL} label="Source Code" />
                )}
              </div>
            </Col>
            <Col
              md={6}
              className="align-items-center align-items-lg-end d-none d-md-flex"
            >
              <ProjectImages images={project.previewImages} />
            </Col>
          </Row>
        </div>
      </Container>
      <Container fluid className="p-0 my-5">
        <div className={projectStyles['preview-scroll-container']}>
          <div className={projectStyles['preview-container']}>
            <div className={projectStyles['preview-container-card-set']}>
              {project.features.map((feature, index) => (
                <div
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
      </Container>
    </div>
  )
}
