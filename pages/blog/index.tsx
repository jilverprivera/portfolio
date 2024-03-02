import { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllFilesMetadata } from 'lib/mdx'
import { IBlogPageProps, IFrontMatter } from 'interfaces'
import { Layout } from 'components/layout/layout'
import { PostCard, PostSearch } from 'components/ui/blog'

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let posts = await getAllFilesMetadata('posts')
  posts = posts.sort(
    (a: IFrontMatter, b: IFrontMatter) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  return { props: { posts } }
}

const Blog: NextPage<IBlogPageProps> = ({ posts }) => {
  const [searchedArticles, setSearchedArticles] = useState<string>('')

  const filteredPosts = posts.filter((post: IFrontMatter) =>
    post.title.toLowerCase().includes(searchedArticles.toLowerCase())
  )
  return (
    <Layout
      metadata={{
        title: 'Blog – Jilver Pacheco',
        description: 'Software developer + electronic engineer.'
      }}
    >
      <section className="max-w-screen-xl w-11/12 mx-auto min-h-screen pt-32 ">
        <PostSearch setSearchedArticles={setSearchedArticles} />
        <div className="w-full pb-12 grid grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
          {filteredPosts.length === 0 && (
            <div className="flex items-center justify-center text-neutral-800 text-2xl">
              Sorry, no results found.
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Blog

