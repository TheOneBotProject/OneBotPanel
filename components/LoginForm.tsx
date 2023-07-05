import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you can handle the login logic, such as sending a request to your backend API
    console.log(`Logging in with username: ${username} and password: ${password}`)
    //router.push('/dashboard')
  };

  return (
    <div className="flex justify-center items-center h-screen text-xs">
      <form onSubmit={handleLogin} className="rounded-lg shadow-lg p-3">
        <label className="block mb-2">
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} className="block border border-gray-300 rounded-lg px-4 py-1 w-full" />
        </label>
        <label className="block mb-2">
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} className="block border border-gray-300 rounded-lg px-4 py-1 w-full" />
        </label>
        <button type="submit" className="bg-emerald-500 hover:bg-blue-600 text-white rounded-lg px-4 py-1">Login</button>
        <p className="mt-2 mb-1">Or log in with:</p>
        <Link href="/" className="bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg flex items-center"><img src='TwitchGlitchWhite.svg' className='scale-[1.5] bg-inherit h-3 m-2'/>Log in with Twitch</Link>
      </form>
    </div>
  )
}
export default LoginForm
