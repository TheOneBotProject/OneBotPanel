import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

type Frontmatter = {
    title: string;
    date: string;
    description: string;
}

const postsDirectory = path.join(process.cwd(), "posts")

export async function getAllPostSlugs() {
    const filenames = fs.readdirSync(postsDirectory)
    return filenames.map((filename) => {
        return {
            params: {
                slug: filename.replace(/\.mdx$/, ""),
            },
        }
    })
}

export async function getBlogPostData() {
    const filenames = fs.readdirSync(postsDirectory)
    const allPostsData = filenames.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "")

        const fullpath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(fullpath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            slug,
            ...(matterResult.data as Frontmatter),
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        }
        return -1
    })
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const mdxSource = fs.readFileSync(fullPath, "utf8")

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism]

      return options
    },
  })

  return {
    slug,
    frontmatter,
    code,
  }
}
