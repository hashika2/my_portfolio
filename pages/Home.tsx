import React, { FC } from 'react'
import {LinkedinOutlined,FacebookOutlined,GithubOutlined} from '@ant-design/icons';

const Home: FC = (): JSX.Element => {
    return (
        <div className='h-screen flex items-center mainhome justify-center w-full'>
            <div className='text-center'>
                <h1 className="text-5xl text-white">Hi, I am <span className='text-pink-500'>Hashika Maduranga</span></h1>
                <p className='font2xl'> Software Engineer.</p>
                <div className="inline-flex space-x-4 ...">
                    <div className="flex-1"><a href="https://web.facebook.com/hashika.maduranga/"><FacebookOutlined style={{ fontSize: '30px', color: '#0abbf6' }}/></a></div>
                    <div className="flex-1"><a href='https://github.com/hashika2'><GithubOutlined style={{ fontSize: '30px', color: '#0abbf6' }}/></a></div>
                    <div className="flex-1"><a href='https://www.linkedin.com/in/hashika-maduranga-78921615b/'><LinkedinOutlined style={{ fontSize: '30px', color: '#0abbf6' }}/></a></div>
                </div>
            </div>
        </div>
    )
}

export default Home
