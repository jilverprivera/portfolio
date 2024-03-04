import type { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { Layout } from 'components/layout'
import { Navigation, MDXComponents } from 'components/mdx'
import { getAllFilesMetadata, getFileBySlug, getFiles } from 'lib/mdx'
import { SlugProps, FrontMatter, IStaticProps, PAGE_TYPE } from 'interfaces'
import { ProjectHero } from 'components/non-used/projects'

export async function getStaticPaths() {
  const files = await getFiles('portfolio')
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(/\.mdx/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: IStaticProps) {
  const { slug } = params
  const portfolio = await getAllFilesMetadata('portfolio')
  const portfolioIndex = portfolio.findIndex(
    (project: FrontMatter) => project.slug === slug
  )
  const prev = portfolio[portfolioIndex + 1] || null
  const next = portfolio[portfolioIndex - 1] || null

  const { source, frontmatter, readingTime } = await getFileBySlug(
    'portfolio',
    slug
  )
  return {
    props: {
      source,
      frontmatter: {
        ...frontmatter
      },
      readingTime,
      prev,
      next
    }
  }
}

const Project: NextPage<SlugProps> = ({
  source,
  frontmatter,
  readingTime,
  prev,
  next
}) => {
  const { publishedAt, title, slug, description, tags } = frontmatter

  return (
    <Layout
      metadata={{
        title: `${title} – Jilver Pacheco`,
        description,
        slug,
        date: publishedAt
      }}
    >
      <ProjectHero {...frontmatter} />
      <section className="my-8 mx-auto text-neutral-100 prose  prose-neutral prose-lg max-w-screen-lg">
        <MDXRemote {...source} components={MDXComponents} />
      </section>
      <Navigation next={next} prev={prev} typePage={PAGE_TYPE.PROJECT} />
    </Layout>
  )
}

export default Project

