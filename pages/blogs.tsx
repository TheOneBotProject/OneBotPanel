import Link from 'next/Link'
// will retrieve a list of blogs from the api and display them in reverse chronological order

export default function blogs() {
    return (
        <div>
            <h1>Blogs</h1>
            <Link href='/blogs/testblog'>Test Blog</Link>
        </div>
    )
}
