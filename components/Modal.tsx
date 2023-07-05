import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import LoginForm from './auth/LoginForm'

// type Props = {
//     children: ReactNode
// }

interface Props {
    onClose: () => void
}

// const Modal = ({children}: Props) => (
//     <div className='backdrop-blur p-2'>
//         <div>{children}</div>
//     </div>
// )

// function Modal(): JSX.Element | null {
//   const [isBrowser, setIsBrowser] = useState(false);
//
//   useEffect(() => {
//     setIsBrowser(true);
//   }, []);
//
//   if (isBrowser) {
//     return ReactDOM.createPortal(
//       <div>Hello from modal</div>,
//       document.getElementById("modal-root")
//     );
//   } else {
//     return null;
//   }
// }

const Modal: React.FC<Props> = ({ onClose }) => {
    const [isBrowser, setIsBrowser] = useState(false)

    return (
        <div>
        
        <div className='z-50 items-center justify-center'>
            <button className='z-[60]' onClick={onClose}>X</button>
            <LoginForm />
        </div>
        </div>
    )
}

export default Modal
