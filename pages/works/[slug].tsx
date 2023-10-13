import type { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { Layout } from 'components/layout'
import { MDXComponents, MDXNavigation, PAGE_TYPE } from 'components/mdx'
import { getAllFilesMetadata, getFileBySlug, getFiles } from 'lib/mdx'
import { IFrontMatter, ISlugProps, IStaticProps } from 'interfaces'

export async function getStaticPaths() {
  const files = await getFiles('projects')
  const paths = files.map((file) => ({ params: { slug: file.replace(/\.mdx/, '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: IStaticProps) {
  const { slug } = params
  const projects = await getAllFilesMetadata('projects')
  const filteredProjects = projects
    .filter((el: IFrontMatter) => el.isPublished)
    .sort((a: IFrontMatter, b: IFrontMatter) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  const projectIndex = filteredProjects.findIndex((project: IFrontMatter) => project.slug === slug)
  const prev = filteredProjects[projectIndex + 1] || null
  const next = filteredProjects[projectIndex - 1] || null
  const { source, frontmatter, readingTime } = await getFileBySlug('projects', slug)
  return { props: { source, frontmatter, readingTime, prev, next } }
}

const Portfolio: NextPage<ISlugProps> = ({ source, frontmatter, prev, next }) => {
  return (
    <Layout
      metadata={{
        title: `${frontmatter.title} –– Jilver Pacheco`,
        description: frontmatter.description,
        slug: frontmatter.slug,
        date: frontmatter.publishedAt
      }}
    >
      <section className="w-full bg-neutral-950">
        <MDXRemote {...source} components={MDXComponents} />
      </section>
      <MDXNavigation next={next} prev={prev} typePage={PAGE_TYPE.PROJECT} />
    </Layout>
  )
}

export default Portfolio

