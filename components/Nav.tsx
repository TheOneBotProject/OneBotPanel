import { useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import NavItem from '../types'
import Modal from './Modal'

interface Props {
    navList: NavItem[],
    className?: string,
}

const Nav: React.FC<Props> = ({navList, className}: Props) => {
    const [showLogin, setShowLogin] = useState(false)

    const handleLogin = () => {
        setShowLogin(true)
    }

    return (
        <nav className={className}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 text-xs'>
            <Link href='/'><h1>OneBot</h1></Link>
            <ul className='hidden md:flex text-gray-300'>
                {navList.map((navitem) => {
                    return (
                        <Link href={navitem.link}>
                            <li key={navitem.name} className='px-5 hover:text-emerald-500'>{navitem.name}</li>
                        </Link>
                    )
                })}
            </ul>
            <button onClick={handleLogin} className='bg-emerald-500 px-2 py-0.5 shadow hover:bg-emerald-400 shadow-emerald-400 rounded-full'>Log in</button>
            {showLogin && createPortal(<Modal onClose={() => setShowLogin(false)} />,document.body)}
            </div>
        </nav>
    )
}
export default Nav

// function navS(orientation: string): string{
//     if (orientation == "horizontal")
//         return navStyles.nav
//     else
//         return dashStyles.sidebar
// }
// instert this into nav if tailwind goes south className={navS(orientation)}
// <li key={navitem.name} className='px-5 hover:text-emerald-500'>
//     <Link href={navitem.link}>{navitem.name}</Link>
// </li>
