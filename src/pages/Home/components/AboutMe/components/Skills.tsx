import { Section } from 'components/ui'
import { PROFILE } from 'data'
import { Row } from 'react-bootstrap'
import { SkillColumn } from './SkillColumn'

function Skills() {
  return (
    <Section md title="Skills">
      <Row className="g-4">
        <SkillColumn data={PROFILE.skills.languages} title="Languages" />
        <SkillColumn data={PROFILE.skills.frameworks} title="Frameworks" />
        <SkillColumn data={PROFILE.skills.applications} title="Applications" />
      </Row>
    </Section>
  )
}

export { Skills }
