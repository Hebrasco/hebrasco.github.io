import { createContext } from 'react'
import type { ProjectContext as ProjectContextType } from 'pages/Project/types/ProjectContext'

const ProjectContext = createContext<ProjectContextType>({
  project: {
    description: '',
    features: [],
    frameworks: [],
    id: '',
    languages: [],
    name: '',
    platforms: [],
    previewImage: {
      dark: {
        altText: '',
        src: '',
      },
      light: {
        altText: '',
        src: '',
      },
    },
    status: {
      type: 'Coming Soon',
    },
    tasks: [],
    titleImage: {
      dark: {
        altText: '',
        src: '',
      },
      light: {
        altText: '',
        src: '',
      },
    },
  },
})

export { ProjectContext }
