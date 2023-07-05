import { useState } from "react"

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // TODO:
        // put logic to submit the email to the signup request system
        console.log(`Submitting ${email} to early access signups`)
        // append the end of the form or div whether it was a success, they're already signed up, 
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-lg shadow-lg p-3 justify-center h-min w-fit">
            <label className="block mb-2">
                Email:
                <input type="email" value={email} onChange={handleEmailChange} className="block border border-gray-300 rounded-lg px-4 py-1 max-w-s" autoFocus />
            </label>
            <button className="bg-emerald-500 hover:bg-blue-600 text-white rounded-lg px-4 py-1">Submit</button>
        </form>
    )
}
export default SignupForm