import { ProjectContext } from 'pages/Project/ProjectContext'
import { useContext } from 'react'

function useProject() {
  const context = useContext(ProjectContext)

  return context
}

export { useProject }
