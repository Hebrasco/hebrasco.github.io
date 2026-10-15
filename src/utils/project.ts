import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

function getStatusSummary(project: Project): string {
  if (project.status.type === PROJECT_STATUS.comingSoon || !project.status.date) {
    return project.status.type
  }

  return `${project.status.type} ${project.status.date.getFullYear()}`
}

function getStatusDetail(project: Project): string {
  if (project.status.type === PROJECT_STATUS.comingSoon || !project.status.date) {
    return project.status.type
  }

  const date = project.status.date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

  return `${project.status.type} ${date}`
}

function splitLeadSentence(text: string): { lead: string; rest: string } {
  const index = text.indexOf('. ')

  if (index < 0) return { lead: text, rest: '' }

  return { lead: text.slice(0, index + 1), rest: text.slice(index + 2) }
}

export { getStatusDetail, getStatusSummary, splitLeadSentence }
