import React from 'react'
import { PROFILE } from 'data'
import { Row } from 'react-bootstrap'
import { Section } from 'components/ui'
import SkillColumn from './SkillColumn'

export default function Skills(): JSX.Element {
  return (
    <Section sm title="Skills">
      <Row>
        <SkillColumn title="Languages" data={PROFILE.skills.languages} />
        <SkillColumn title="Frameworks" data={PROFILE.skills.frameworks} />
        <SkillColumn title="Applications" data={PROFILE.skills.applications} />
      </Row>
    </Section>
  )
}
