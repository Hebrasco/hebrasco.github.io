import { PROJECTS } from 'data'
import { ProjectDescription } from 'pages/Project/components/ProjectDescription'
import { ProjectFeatures } from 'pages/Project/components/ProjectFeatures'
import { ProjectHero } from 'pages/Project/components/ProjectHero'
import { ProjectKeyInfo } from 'pages/Project/components/ProjectKeyInfo'
import { ProjectScreenshots } from 'pages/Project/components/ProjectScreenshots'
import { ProjectContext } from 'pages/Project/ProjectContext'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

function Project() {
  const { projectId } = useParams()
  const project = useMemo(() => PROJECTS.find(({ id }) => id === projectId), [projectId])

  if (!projectId || !project) return <div>Project not found</div>

  return (
    <ProjectContext.Provider value={{ project }}>
      <div className="navbar-spacer">
        <ProjectHero />
        <ProjectKeyInfo />
        <ProjectDescription />
        <ProjectFeatures />
        <ProjectScreenshots />
      </div>
    </ProjectContext.Provider>
  )
}

export { Project }
