import React from 'react'
import { ROUTES } from 'constants/Routes'
import {
  SKILLS_LANGUAGES,
  SKILLS_FRAMEWORKS,
  SKILLS_APPLICATIONS,
} from 'constants/Skills'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import Section from 'common/Section/Section'

export default function AboutMe(): JSX.Element {
  return (
    <Container>
      <Section lg title="About me" anchor={ROUTES.aboutMe}>
        <Row>
          <Col xs={12} className="align-self-center">
            <p className="d-inline-block mt-2 mt-md-0 fs-5">
              I have been working in app development since 2015 and have already
              implemented various projects for iOS and Android in small and
              large teams. I prefer programming for iOS, where I have already
              published an app.
            </p>
            <Row className="mb-3">
              <Col xs={12}>
                <h5>Programming languages</h5>
                {SKILLS_LANGUAGES.map((language) => {
                  return (
                    <Badge
                      pill
                      bg={language.variant}
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
                    bg={framework.variant}
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
                    bg={application.variant}
                    key={`skills-application-${application.name}`}
                  >
                    {application.name}
                  </Badge>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
    </Container>
  )
}
