// import { IFrontMatter } from 'interfaces'
import { IReadTimeResults } from 'reading-time'
import { IFrontMatter } from './mdx'

export interface ILayout {
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
  frontmatter: IFrontMatter
  readingTime?: IReadTimeResults
  prev?: IFrontMatter | undefined
  next?: IFrontMatter | undefined
}

