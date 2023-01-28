import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import NavItem from '../types'

type Props = {
    navList: NavItem[],
    children: JSX.Element
}

const Nav = ({navList}: Props) => (
    <nav className={navStyles.nav}>
        <ul>
            {navList.map((navitem) => {
                return (
                    <li>
                        <Link href={navitem.link}>{navitem.name}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>
)
export default Nav
