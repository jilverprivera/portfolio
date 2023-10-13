import Image from 'next/image'
import { UnderConstruction } from './under-construction-component'
import { ProjectNavigation } from './project-navigation-component'
import { MDXObjectivesCOmponent, MDXSectionsDividerComponent, MdxHeroComponent } from './shared'

export const MDXComponents = {
  img: (props: any) => <Image width={1280} height={720} objectFit="contain" quality={100} alt="image" {...props} />,
  UnderConstruction,
  ProjectNavigation,
  MDXSectionsDividerComponent,
  MDXObjectivesCOmponent,
  MdxHeroComponent
}

