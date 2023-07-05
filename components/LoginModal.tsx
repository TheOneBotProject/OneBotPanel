import { useState } from 'react';
import Modal from './Modal'
import LoginForm from './LoginForm'

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = () => {

    return (
        <Modal>
            <LoginForm />
        </Modal>
    )
}
