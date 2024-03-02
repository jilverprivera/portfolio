import { IReadTimeResults } from 'reading-time'

export interface IFrontMatter {
  slug: string
  title: string
  subTitle?: string
  description: string
  coverImage?: string
  category?: string
  company?: string
  completionTime?: string
  finished?: boolean
  publishedAt: string
  readingTime?: IReadTimeResults
  tags: string[]
  technologies?: string[]
  githubUrl?: string
  url?: string
  downloadUrl?: string
  collaborators?: string[]
  position?: string[]
}

export enum PROJECT_CATEGORY {
  WORK_PROJECT = 'Work Product',
  SIDE_PROJECT = 'Side Project',
  FINAL_PROJECT = 'Final Project'
}

export enum PAGE_TYPE {
  POST = 'POST',
  PROJECT = 'PROJECT'
}

