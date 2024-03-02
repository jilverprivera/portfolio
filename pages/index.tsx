import type { GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/layout'
import { Hero, Portfolio } from 'components/sections/home'
import { IFrontMatter, ProjectProps } from 'interfaces'
import { getAllFilesMetadata } from 'lib/mdx'
import Image from 'next/image'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  let projects = await getAllFilesMetadata('portfolio')
  projects = projects
    .filter((el: IFrontMatter) => el.finished)
    .sort(
      (a: IFrontMatter, b: IFrontMatter) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  return { props: { projects } }
}

const Home: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Software developer + electronic engineer'
      }}
    >
      <Hero />
      <Portfolio projects={projects} />
      <section className="max-w-screen-xl w-11/12 mx-auto grid grid-cols-2 gap-8">
        {projects.map((el) => (
          <Link key={el.slug} href={`/work/${el.slug}`}>
            <a>
              <div className="space-y-4 border p-4">
                <div className="flex items-center justify-center overflow-hidden">
                  {el.coverImage && (
                    <Image
                      src={el.coverImage}
                      alt={el.slug}
                      width={1920}
                      height={1080}
                      quality={100}
                      objectFit="cover"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{el.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {el.technologies?.map((technology, i) => (
                      <span key={i} className="text-xs gap-1">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed">{el.description}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export default Home

