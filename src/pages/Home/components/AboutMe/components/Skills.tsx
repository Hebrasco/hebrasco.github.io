import React from 'react'
import {
  SKILLS_LANGUAGES,
  SKILLS_FRAMEWORKS,
  SKILLS_APPLICATIONS,
} from 'data/profile'
import { Row } from 'react-bootstrap'
import { Section } from 'components/ui'
import SkillColumn from './SkillColumn'

export default function Skills(): JSX.Element {
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
