import React from 'react'
import {
  SKILLS_LANGUAGES,
  SKILLS_FRAMEWORKS,
  SKILLS_APPLICATIONS,
} from 'constants/skills'
import { ROUTES } from 'constants/routes'
import { Row, Col } from 'react-bootstrap'
import Section from 'common/Section/Section'
import SkillColumn from './components/SkillColumn'
import ExternalLink from 'common/ExternalLink/ExternalLink'
import Link from 'common/Link/Link'

export function Skills(): JSX.Element {
  return (
    <Section sm title="Skills">
      <Row>
        <SkillColumn title="Languages" data={SKILLS_LANGUAGES} />
        <SkillColumn title="Frameworks" data={SKILLS_FRAMEWORKS} />
        <SkillColumn title="Programs" data={SKILLS_APPLICATIONS} />
      </Row>
    </Section>
  )
}

export function AboutText(): JSX.Element {
  return (
    <Row>
      <Col xs={12} sm={10} md={6}>
        <p>
          I have been working in Front-End and Mobile development since 2015 and
          have already implemented various projects for web, Android and iOS in
          small and large teams.
        </p>
      </Col>
    </Row>
  )
}

export function Actions(): JSX.Element {
  return (
    <Row>
      <Col xs={12}>
        <ExternalLink
          to="/daniel_bedrich_resume.pdf"
          className="btn-dark"
          button
        >
          Download Resume
        </ExternalLink>
        <Link
          button
          to={ROUTES.contact}
          label="Let's Talk"
          className="btn-outline-dark ms-3"
        />
      </Col>
    </Row>
  )
}
