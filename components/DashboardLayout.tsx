import NavItem from '../types'
import Nav from './Nav'

import dashStyles from '../styles/Dashboard.module.css'

const dList: NavItem[] = [
    {
       name: 'bot',
       link: '/dashboard/bot'
    }, {
        name: 'commands',
        link: '/dashboard/commands'
    }, {
        name: 'connections',
        link: '/dashboard/connections'
    }
]

type Props = {
    children: JSX.Element
}

export default function DashboardLayout({children}: Props) {
    return (
        <>
            <Nav navList={dList} orientation="vertical" />
            <div className={dashStyles.container}>
                <main className={dashStyles.main} style={{marginLeft: 100}}>
                    {children}
                </main>
            </div>
        </>
    )
}
