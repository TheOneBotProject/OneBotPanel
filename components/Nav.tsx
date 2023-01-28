import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import NavItem from '../interfaces/navigation/NavItem.interface.ts'

type Props = {
    navList: NavItem[],
    children: JSX.Element
}

const Nav = ({navList}: Props) => (
    <nav className={navStyles.nav}>
        <ul>
            {navList.map(Navitem => {
                return (
                    <li>
                        <Link href={NavItem.link}>{NavItem.name}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>
)
export default Nav
