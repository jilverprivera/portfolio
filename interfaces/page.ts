import { IFrontMatter } from 'interfaces'

export interface IHomeProps {
  projects: IFrontMatter[]
}
export interface IBlogPageProps {
  posts: IFrontMatter[]
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

