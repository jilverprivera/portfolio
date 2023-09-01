import Image from 'next/image'
import { UnderConstruction } from './UnderConstruction'
import { ProjectNavigation } from './ProjectNavigation'

export const MDXComponents = {
  img: (props: any) => <Image width={1280} height={720} objectFit="contain" quality={100} alt="image" {...props} />,
  UnderConstruction,
  ProjectNavigation
}

