import { IReadTimeResults } from 'reading-time'

export interface FrontMatter {
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
  color?: string
}

export enum PAGE_TYPE {
  POST = 'POST',
  PROJECT = 'PROJECT'
}

