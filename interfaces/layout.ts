// import { IFrontMatter } from 'interfaces'
import { IReadTimeResults } from 'reading-time'
import { FrontMatter } from './mdx'

export interface Layout {
  children: React.ReactNode
  metadata: MetaData
}

export interface MetaData {
  title: string
  description: string
  slug?: string | null
  date?: number | null | string
  alternate?: string | null
  path?: string | null
}

export interface SlugProps {
  source: any
  frontmatter: FrontMatter
  readingTime?: IReadTimeResults
  prev?: FrontMatter | undefined
  next?: FrontMatter | undefined
}

