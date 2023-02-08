import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import NavItem from '../types'

type Props = {
    navList: NavItem[],
    orientation: string
}

const Nav = ({navList, orientation}: Props) => (
    <nav className={orientation == "horizontal" ? navStyles.nav : navStyles.navHorizontal}>
        <ul>
            {navList.map((navitem) => {
                return (
                    <li key={navitem.name}>
                        <Link href={navitem.link}>{navitem.name}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>
)
export default Nav
