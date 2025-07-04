import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import { useProject } from 'pages/Project/hooks/useProject'
import { Image } from 'react-bootstrap'

function ProjectTitleImage() {
  const {
    project: { titleImage },
  } = useProject()
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light

  return (
    <div className="d-flex align-items-end justify-content-end">
      <Image
        alt={isLightScheme ? titleImage.light.altText : titleImage.dark.altText}
        loading="lazy"
        src={isLightScheme ? titleImage.light.src : titleImage.dark.src}
        width="100%"
      />
    </div>
  )
}

export { ProjectTitleImage }
