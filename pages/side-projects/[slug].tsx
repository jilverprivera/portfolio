import type { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { Layout } from 'components/layout'
import { MDXNavigation, PAGE_TYPE, MDXComponents } from 'components/mdx'
import { getAllFilesMetadata, getFileBySlug, getFiles } from 'lib/mdx'
import { ISlugProps, IFrontMatter, IStaticProps } from 'interfaces'
import { formatDate } from 'utils'

export async function getStaticPaths() {
  const files = await getFiles('playground')
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
  const posts = await getAllFilesMetadata('playground')
  const postIndex = posts.findIndex((post: IFrontMatter) => post.slug === slug)
  const prev = posts[postIndex + 1] || null
  const next = posts[postIndex - 1] || null

  const { source, frontmatter, readingTime } = await getFileBySlug('playgroud', slug)
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

const Post: NextPage<ISlugProps> = ({ source, frontmatter, readingTime, prev, next }) => {
  const { publishedAt, title, slug, description, tags } = frontmatter

  return (
    <Layout
      metadata={{
        title: `${title} –– Jilver Pacheco`,
        description,
        slug,
        date: publishedAt
      }}
    >
      <section className="max-w-screen-3xl mx-auto w-11/12 flex flex-col items-center justify-center pt-32">
        <h1 className="text-6xl text-neutral-300 text-center font-semibold mb-2 leading-tight">{title}</h1>
        <hr className="w-full mt-8 border-t mx-auto" />
        <div className="max-w-screen-lg w-full mx-auto py-8 flex items-center justify-between">
          <div className="flex gap-x-2 mb-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="relative first:pl-0 first:before:content-[''] before:content-['-'] before:absolute before:left-0  pl-4 text-base text-neutral-400 lowercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm  font-semibold text-center text-neutral-400 ">{formatDate('en-US', new Date(publishedAt))}</span>
          <span className="text-sm font-semibold text-center text-neutral-400">{readingTime?.text}</span>
        </div>
        <hr className="w-full border-t mx-auto" />
      </section>
      <section className="my-8 mx-auto text-neutral-100 prose  prose-neutral prose-lg max-w-screen-lg">
        <MDXRemote {...source} components={MDXComponents} />
      </section>
      <MDXNavigation next={next} prev={prev} typePage={PAGE_TYPE.POST} />
    </Layout>
  )
}

export default Post

