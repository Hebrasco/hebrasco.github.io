import { useColorScheme } from 'hooks'
import { useProject } from 'pages/Project/hooks/useProject'
import { Image } from 'react-bootstrap'

function ProjectTitleImage() {
  const {
    project: { titleImage },
  } = useProject()
  const { colorScheme } = useColorScheme()

  return (
    <div className="d-flex align-items-end justify-content-end">
      <Image
        alt={titleImage[colorScheme].altText}
        loading="lazy"
        src={titleImage[colorScheme].src}
        width="100%"
      />
    </div>
  )
}

export { ProjectTitleImage }
