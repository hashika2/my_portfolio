import React, { FC } from 'react'
import LeftNavBar from '../src/components/navbar/LeftNavBar'

const Home: FC = (): JSX.Element => {
    return (
        <div className='bg-green-500 h-screen flex text-center items-center'>
            <div>
            <h1 className="text-5xl">Hi, I am Anjana Shakthi</h1>
            <p className='text-xl'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <div className="inline-flex space-x-4 ...">
                <div className="flex-1">fackbook</div>
                <div className="flex-1">git</div>
                <div className="flex-1">Linkedin</div>
            </div>
            </div>
        </div>
    )
}

export default Home
