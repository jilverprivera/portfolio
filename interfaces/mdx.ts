import { IReadTimeResults } from 'reading-time'

export interface IFrontMatter {
  slug: string
  title: string
  description: string
  coverImage?: string
  isPublished: boolean
  finished: boolean
  publishedAt: string
  category: string
  tags: string[]
  technologies?: string[]
  gitHubUrl?: string
  hostUrl?: string
  externalUrl?: string
  readingTime?: IReadTimeResults
  collaborators?: string[]
  roles?: string[]
}

