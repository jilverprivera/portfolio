import { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllFilesMetadata } from 'lib/mdx'
import { IBlogPageProps, IFrontMatterV2 } from 'interfaces'
import { Layout } from 'components/layout/layout'

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let posts = await getAllFilesMetadata('posts')
  posts = posts.sort(
    (a: IFrontMatterV2, b: IFrontMatterV2) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  return { props: { posts } }
}

const Blog: NextPage<IBlogPageProps> = ({ posts }) => {
  const [searchedArticles, setSearchedArticles] = useState<string>('')
  const filteredPosts = posts.filter((post: IFrontMatterV2) =>
    post.title?.toLowerCase().includes(searchedArticles.toLowerCase())
  )
  return (
    <Layout
      metadata={{
        title: 'Blog – Jilver Pacheco',
        description: 'Software developer + electronic engineer.'
      }}
    >
      <section className="max-w-screen-3xl w-11/12 mx-auto min-h-screen pt-32 ">
        {/* <BlogTitle />
        <PostSearch setSearchedArticles={setSearchedArticles} /> */}
        <div className="w-full pb-12">
          {/* {filteredPosts.map((post) => (
            // <PostCard key={post.slug} {...post} />
          ))} */}
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

