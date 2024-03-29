import Head from "next/head"
import SignupForm from '@/components/auth/SignupForm'

export default function Signup() {
    return (
        <>
            <Head>
                <title>OneBot</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-flow-row justify-center content-center text-xs auto-cols-min h-screen w-screen auto-rows-min">
                <p className="max-w-md justify-self-center text-center">We're currently only taking in a whitelisted userbase. To add yourself to the queue and recieve updates about your access status, give us an email to reach you.</p>
                <SignupForm />
            </div>
        </>
    )
}