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
import { PROJECT_CONTAINER_HEIGHT_OFFSET } from 'pages/Home/components/Projects/constants'
import { conditionalStyle } from 'utils'

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
    <>
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="fw-bold">{project.name}</h1>
            <ComingSoon isComingSoon={project.isComingSoon} />
            <Badges
              colors={{
                background: project.previewColors.backgroundGradient.start,
                foreground: project.previewColors.title,
              }}
              languages={project.languages}
              frameworks={project.frameworks}
            />
          </Col>
        </Row>
        <div className="p-5 bg-light my-5 rounded d-flex">
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
              <div
                className="mt-auto d-flex justify-content-space-between"
                style={{ height: 38 }}
              >
                <Action
                  to={project.onlineURL}
                  label="App Store"
                  filled
                  colors={{
                    background: project.previewColors.backgroundGradient.start,
                    foreground: project.previewColors.title,
                  }}
                />
                <Action
                  to={project.sourceURL}
                  label="Source Code"
                  colors={{
                    background: project.previewColors.backgroundGradient.start,
                    foreground: project.previewColors.backgroundGradient.start,
                  }}
                />
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
      <Container fluid className="p-0">
        <div>
          <div
            className={projectStyles['preview-scroll-container']}
            style={{
              height: `${height + PROJECT_CONTAINER_HEIGHT_OFFSET}px`,
            }}
          >
            <div
              className={`d-flex flex-row flex-nowrap pt-3 pb-5 ${projectStyles['preview-container']}`}
            >
              {project.tasks.map((task, index) => (
                <div
                  style={{
                    width: `calc(${width}px + 1.5rem)`,
                    height,
                    scrollSnapAlign: conditionalStyle(
                      isMobile,
                      'center',
                      'start'
                    ),
                  }}
                >
                  <div
                    className={previewStyles['preview-container']}
                    style={{
                      transform: conditionalStyle(
                        isMobile,
                        'translateX(12px)',
                        'translateX(245px)'
                      ),
                      marginRight: conditionalStyle(
                        index === project.tasks.length - 1,
                        '20px',
                        '60px'
                      ),
                      width,
                    }}
                  >
                    <div
                      className={`rounded ${previewStyles['preview-content-container']} bg-light`}
                      style={{
                        justifyContent: 'flex-start',
                      }}
                    >
                      <i
                        className="bi bi-bell h1"
                        style={{ marginBottom: 30 }}
                      ></i>
                      <p
                        className={`${conditionalStyle(
                          isMobile,
                          'h4',
                          'h3'
                        )} fw-bold`}
                      >
                        Notifications
                      </p>
                      <p>
                        Get a notification on you anniversary and other special
                        dates.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
