import React, { FC } from 'react'
import LeftNavBar from '../src/components/navbar/LeftNavBar'
import {LinkedinOutlined,FacebookOutlined,GithubOutlined} from '@ant-design/icons';

const Home: FC = (): JSX.Element => {
    return (
        <div className='h-screen flex text-center items-center'>
            <div>
            <h1 className="text-5xl text-white">Hi, I am <span className='text-green-500'>Anjana Shakthi</span></h1>
            <p className='fontxl'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <div className="inline-flex space-x-4 ...">
                <div className="flex-1"><FacebookOutlined style={{ fontSize: '30px', color: '#1CF60A' }}/></div>
                <div className="flex-1"><GithubOutlined style={{ fontSize: '30px', color: '#1CF60A' }}/></div>
                <div className="flex-1"><LinkedinOutlined style={{ fontSize: '30px', color: '#1CF60A' }}/></div>
            </div>
            </div>
        </div>
    )
}

export default Home
