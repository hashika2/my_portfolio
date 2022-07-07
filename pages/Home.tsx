import React, { FC } from 'react'
import {LinkedinOutlined,FacebookOutlined,GithubOutlined} from '@ant-design/icons';

const Home: FC = (): JSX.Element => {
    return (
        <div className='h-screen flex items-center mainhome justify-center w-full'>
            <div className='text-center'>
                <h1 className="text-5xl text-white">Hi, I am <span className='text-green-500'>Anjana Shakthi</span></h1>
                <p className='font2xl'> I&lsquo; m a Software Engineer.</p>
                <div className="inline-flex space-x-4 ...">
                    <div className="flex-1"><a href="https://www.facebook.com/Anjana18Shakthi/"><FacebookOutlined style={{ fontSize: '30px', color: '#1CF60A' }}/></a></div>
                    <div className="flex-1"><a href='https://github.com/anjana6'><GithubOutlined style={{ fontSize: '30px', color: '#1CF60A' }}/></a></div>
                    <div className="flex-1"><a href='https://www.linkedin.com/in/anjanajayasinghe/'><LinkedinOutlined style={{ fontSize: '30px', color: '#1CF60A' }}/></a></div>
                </div>
            </div>
        </div>
    )
}

export default Home
