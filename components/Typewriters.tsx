import Typewriter from 'typewriter-effect'

export default function Typewriters() {
    return (
        <div>
            <h1 className='text-slate-50'>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: [
                            "Twitch.",
                            "Discord.",
                            "YouTube.",
                            "All in one spot."
                        ]
                    }}
                />
            </h1>
        </div>
    )
}
