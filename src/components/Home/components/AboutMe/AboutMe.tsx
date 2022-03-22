import React from 'react'
import { ROUTES } from 'constants/Routes'
import {
  SKILLS_LANGUAGES,
  SKILLS_FRAMEWORKS,
  SKILLS_APPLICATIONS,
} from 'constants/Skills'
import { Container, Row } from 'react-bootstrap'
import Section from 'common/Section/Section'
import SkillColumn from './components/SkillColumn'
import { conditionalStyle } from 'utils/helpers'
import { useWindowSize } from 'utils/hooks'

import './AboutMe.css'

export default function AboutMe(): JSX.Element {
  const baseStyle = 'about-me-text'
  const { isXs, isSm } = useWindowSize()

  return (
    <Container>
      <Section lg title="About me" anchor={ROUTES.aboutMe}>
        <p
          className={`${baseStyle}
          ${conditionalStyle(isXs, `${baseStyle}-xs`)}
          ${conditionalStyle(isSm, `${baseStyle}-sm`)}
          fs-5`}
        >
          I have been working in Front-End development since 2015 and have
          already implemented various projects for web, Android and iOS in small
          and large teams.
        </p>
        <Section sm title="Skills">
          <Row className="justify-content-between">
            <SkillColumn title="Languages" data={SKILLS_LANGUAGES} />
            <SkillColumn title="Frameworks" data={SKILLS_FRAMEWORKS} />
            <SkillColumn title="Programs" data={SKILLS_APPLICATIONS} />
          </Row>
        </Section>
      </Section>
    </Container>
  )
}
