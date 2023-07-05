import React from "react"
import Nav from './Nav'
import NavItem from '../types'

// type Props = {
//     navList: NavItem[],
//     children: JSX.Element
// }

type Props = {
    navList: NavItem[],
    className?: string
}

// const Layout = ({ navList, children}: Props) => (
//     <>
//         <Nav navList={navList} orientation="horizontal" />
//         <div /*className={styles.container}*/>
//             <main>
//                 {children}
//             </main>
//         </div>
//     </>
// )

const Layout = ({navList, className}: Props) => (
    <div className={className}>
        <Nav navList={navList} orientation="horizontal" className='fixed left-0 top-0 w-full z-10 ease-in duration-300'/>
    </div>
)
export default Layout
