import { FrontMatter } from 'interfaces'

export interface ProjectProps {
  projects: FrontMatter[]
}
export interface IBlogPageProps {
  posts: FrontMatter[]
}

export interface IStaticProps {
  params: IStaticPropsParams
  locale: string
}

export interface IStaticPropsParams {
  slug: string
}

export interface IStaticPathProps {
  locales: string[]
  locale: string
}

