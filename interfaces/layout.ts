import { IReadTimeResults } from 'reading-time'
import { FrontMatter } from './mdx'

export type ILayout = {
  children: React.ReactNode
  metadata: IMetaData
}

export interface IMetaData {
  title: string
  description: string
  slug?: string | null
  date?: number | null | string
  alternate?: string | null
  path?: string | null
}

export interface ISlugProps {
  source: any
  frontmatter: FrontMatter
  readingTime?: IReadTimeResults
  prev?: FrontMatter | undefined
  next?: FrontMatter | undefined
}

