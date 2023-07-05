import NavItem from '../types'
import Nav from './Nav'

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
            <Nav navList={dList}/>
            <div className='mt-4'>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}
