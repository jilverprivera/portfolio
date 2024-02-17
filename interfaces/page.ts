import { IFrontMatter, IFrontMatterV2 } from 'interfaces'

export interface IHomeProps {
  projects: IFrontMatterV2[]
}
export interface IBlogPageProps {
  posts: IFrontMatter[]
}

// export interface IStaticProps {
//   params: IStaticPropsParams
//   locale: string
// }

// export interface IStaticPropsParams {
//   slug: string
// }

// export interface IStaticPathProps {
//   locales: string[]
//   locale: string
// }

