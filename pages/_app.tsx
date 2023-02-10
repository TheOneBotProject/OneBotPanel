import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout";
import NavItem from '../types'

export default function App({ Component, pageProps }: AppProps) {
  const nList: NavItem[] = [
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
  return (
      <Layout navList={nList}>
        <Component {...pageProps} />
      </Layout>
  )
}
