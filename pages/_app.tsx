import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from "@/components/Nav"
import NavItem from '../types'

export default function App({ Component, pageProps }: AppProps) {
  const navList: NavItem[] = [
      {
         name: 'home',
         link: '/'
      }, {
          name: 'about',
          link: '/about'
      }, {
          name: 'blogs',
          link: '/blogs'
      }, {
          name: 'dashboard',
          link: '/dashboard'
      }
  ]
  // return (
  //     <Layout navList={nList}>
  //       <Component {...pageProps} />
  //     </Layout>
  // )
  return (
    <>
        <Nav navList={navList} className='fixed h-8 shadow-xl w-full z-30 bg-zinc-700'/>
        <Component {...pageProps} />
    </>
  )
}
