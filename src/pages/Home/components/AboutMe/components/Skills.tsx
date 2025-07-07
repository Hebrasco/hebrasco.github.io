import { Column, Row } from 'components/layout'
import { Section } from 'components/ui'
import { PROFILE } from 'data'
import { SkillColumn } from './SkillColumn'

function Skills() {
  return (
    <Column>
      <Section md title="Skills">
        <Row gap={1.5}>
          <SkillColumn data={PROFILE.skills.languages} title="Languages" />
          <SkillColumn data={PROFILE.skills.frameworks} title="Frameworks" />
          <SkillColumn data={PROFILE.skills.applications} title="Applications" />
        </Row>
      </Section>
    </Column>
  )
}

export { Skills }
