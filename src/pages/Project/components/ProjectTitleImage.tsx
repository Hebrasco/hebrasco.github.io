import { useColorScheme } from 'hooks'
import { useProject } from 'pages/Project/hooks/useProject'

function ProjectTitleImage() {
  const {
    project: { titleImage },
  } = useProject()
  const { colorScheme } = useColorScheme()

  return (
    <div className="d-flex align-items-end justify-content-end">
      <img
        alt={titleImage[colorScheme].altText}
        height="100%"
        loading="lazy"
        src={titleImage[colorScheme].src}
        width="100%"
      />
    </div>
  )
}

export { ProjectTitleImage }
