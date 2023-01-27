import styles from '../styles/Layout.module.css'
import React from "react";

type Props = {
    navList: string[],
    children: JSX.Element
}

const Layout = ({ navList, children}: Props) => (
    <div className={styles.container}>
        <main className={styles.main}>
            {children}
        </main>
    </div>
)
export default Layout
