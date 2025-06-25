import { Section } from 'components/ui'
import { PROFILE } from 'data'
import React from 'react'
import { Row } from 'react-bootstrap'
import { SkillColumn } from './SkillColumn'

export function Skills(): JSX.Element {
  return (
    <Section md title="Skills">
      <Row className="g-4">
        <SkillColumn title="Languages" data={PROFILE.skills.languages} />
        <SkillColumn title="Frameworks" data={PROFILE.skills.frameworks} />
        <SkillColumn title="Applications" data={PROFILE.skills.applications} />
      </Row>
    </Section>
  )
}
