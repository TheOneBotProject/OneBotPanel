import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import dashStyles from '../styles/Dashboard.module.css'
import NavItem from '../types'

type Props = {
    navList: NavItem[],
    orientation: string
}

const Nav = ({navList, orientation}: Props) => (
    <nav className={navS(orientation)}>
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

function navS(orientation: string): string{
    if (orientation == "horizontal")
        return navStyles.nav
    else
        return dashStyles.sidebar
}
