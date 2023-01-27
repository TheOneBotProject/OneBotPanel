import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

type Props = {
    navList: string[],
    children: JSX.Element
}

const Nav = ({navList}: Props) => (
    <nav className={navStyles.nav}>

    </nav>
)
export default Nav
