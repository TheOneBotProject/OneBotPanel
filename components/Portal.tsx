import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface Props {
    children: React.ReactNode
}

const Portal: React.FC<Props> = ({ children })  => {
    const portalRef = useRef<HTMLDivElement>(null)
    const portalNode = portalRef.current

    if (!portalNode) {
        throw new Error('Portal node not found')
    }

    useEffect(() => {
        const mountNode = document.getElementById('portal-root')
        if (mountNode) {
            mountNode.appendChild(portalNode)
        }

        return () => {
            if (mountNode) {
                mountNode.removeChild(portalNode)
            }
        }
    }, [portalNode])

    return createPortal(children, portalNode)
}

export default Portal