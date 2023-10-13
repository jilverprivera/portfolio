import Image from 'next/image'
import { BsGithub, BsLink45Deg } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import { IFrontMatter } from 'interfaces'

export const UnderConstruction = ({ gitHubUrl, hostUrl, externalUrl }: IFrontMatter) => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-screen-2xl xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full  mx-auto grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xs:gap-0 sm:gap-0 md:gap-12 lg:gap-12 xl:gap-12  pt-32 pb-16">
        <div className="w-full col-start-1 flex items-start justify-center flex-col">
          <p className="text-5xl font-semibold mb-6 leading-tight text-zinc-900 dark:text-zinc-50">Under construction...</p>
          <p className="text-lg font-normal leading-relaxed mb-3 text-zinc-700 dark:text-zinc-300">
            I&apos;m building the UI of this project, if you want to see the project, here are the following links:
          </p>

          {gitHubUrl && (
            <div className="flex items-center justify-start mb-3">
              <span className="text-2xl mr-3">
                <BsGithub />
              </span>
              <a href={gitHubUrl} target="_blank" rel="noreferrer noopener">
                {gitHubUrl}
              </a>
            </div>
          )}

          {hostUrl && (
            <div className="flex items-center justify-start mb-3">
              <span className="text-2xl mr-3">
                <TbWorld />
              </span>
              <a href={hostUrl} target="_blank" rel="noreferrer noopener">
                {hostUrl}
              </a>
            </div>
          )}

          {externalUrl && (
            <div className="flex items-center justify-start mb-3">
              <span className="text-2xl mr-3">
                <BsLink45Deg />
              </span>
              <a href={externalUrl} target="_blank" rel="noreferrer noopener">
                {externalUrl}
              </a>
            </div>
          )}
        </div>
        <div className="xs:row-start-1 sm:row-start-1 md:row-start-1 lg:row-start-1 xl:row-start-1 xs:col-start-1 sm:col-start-1 md:col-start-2 lg:col-start-2 xl:col-start-2">
          <Image alt={'under-construction'} src={'/static/coding.svg'} width={640} height={640} />
        </div>
      </div>
    </section>
  )
}

