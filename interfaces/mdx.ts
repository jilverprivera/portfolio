import { IReadTimeResults } from 'reading-time'

// export interface IFrontMatter {
//   // slug?: string
//   title: string
//   description: string
//   coverImage?: string
//   isPublished?: boolean
//   finished?: boolean
//   publishedAt: string
//   category: string
//   tags: string[]
//   technologies?: string[]
//   gitHubUrl?: string
//   hostUrl?: string
//   externalUrl?: string
//   readingTime?: IReadTimeResults
//   collaborators?: string[]
//   roles?: string[]
// }


export interface IFrontMatterV2 {
  slug: string
  title?: string
  subTitle?: string
  description: string
  coverImage?: string
  finished?: boolean
  publishedAt: string
  readingTime?: IReadTimeResults
  category?: PROJECT_CATEGORY
  tags?: string[]
  technologies?: string[]
  githubUrl?: string
  url?: string
  collaborators?: string[]
  position?: string[]
}

export enum PROJECT_CATEGORY {
  WORK_PROJECT = 'Work Product',
  SIDE_PROJECT = 'Side Project',
  FINAL_PROJECT = 'Final Project'
}

