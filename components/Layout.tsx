import styles from '../styles/Layout.module.css'
import React from "react"
import Nav from './Nav'
import NavItem from '../types'

type Props = {
    navList: NavItem[],
    children: JSX.Element
}

const Layout = ({ navList, children}: Props) => (
    <>
        <Nav navList={navList} orientation="horizontal"/>
        <div /*className={styles.container}*/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </>
)
export default Layout
