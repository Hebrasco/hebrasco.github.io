import React from 'react'
import { ROUTES } from 'constants/Routes'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Media from 'react-bootstrap/esm/Media'
import Col from 'react-bootstrap/esm/Col'
import Badge from 'react-bootstrap/esm/Badge'
import {
  SKILLS_LANGUAGES,
  SKILLS_FRAMEWORKS,
  SKILLS_APPLICATIONS,
} from 'constants/Skills'

export default function AboutMe(): JSX.Element {
  return (
    <Container style={{ position: 'relative' }}>
      <div id={ROUTES.aboutMe.replace('/#', '')} className="top-anchor"></div>
      <Media>
        <Row>
          <Col xs={12} className="align-self-center">
            <Media.Body>
              <p className="d-inline-block mt-2 mt-md-0">
                I have been working in app development since 2015 and have
                already implemented various projects for iOS and Android in
                small and large teams. I prefer programming for iOS, where I
                have already published an app.
              </p>
              <Row className="mb-3">
                <Col xs={12}>
                  <h5>Programming languages</h5>
                  {SKILLS_LANGUAGES.map((language) => {
                    return (
                      <Badge
                        pill
                        variant={language.variant}
                        key={`skills-language-${language.name}`}
                      >
                        {language.name}
                      </Badge>
                    )
                  })}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12}>
                  <h5>Frameworks</h5>
                  {SKILLS_FRAMEWORKS.map((framework) => (
                    <Badge
                      pill
                      variant={framework.variant}
                      key={`skills-framework-${framework.name}`}
                    >
                      {framework.name}
                    </Badge>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h5>Programs</h5>
                  {SKILLS_APPLICATIONS.map((application) => (
                    <Badge
                      pill
                      variant={application.variant}
                      key={`skills-application-${application.name}`}
                    >
                      {application.name}
                    </Badge>
                  ))}
                </Col>
              </Row>
            </Media.Body>
          </Col>
        </Row>
      </Media>
    </Container>
  )
}
