import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getBlogPostData } from '../../util/posts'
import Date from '../../components/Date'

type PostData = {
    title: string,
    date: string,
    description: string,
    slug: string
}

type Props = {
    allPostsData: PostData[]
}

export default function BlogPage({ allPostsData }: Props) {
    return (
    <>
      <header>
        <h1>Blog</h1>
      </header>
      <section>
        {allPostsData.map(({ title, slug, date }: PostData) => {
          return (
            <Link key={slug} href={`/blogs/${slug}`} itemProp="url">
                <article itemScope itemType="http://schema.org/Article">
                  <header>
                    <h2 itemProp="headline">{title}</h2>
                    <p>
                      <Date dateString={date} />
                    </p>
                  </header>
                </article>
            </Link>
          );
        })}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = await getBlogPostData()
    return {
        props: {
            allPostsData
        }
    }
}
