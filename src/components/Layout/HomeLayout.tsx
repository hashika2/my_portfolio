import React, { FC} from 'react';
import LeftNavBar from '../navbar/LeftNavBar';
import Head from 'next/head';

const HomeLayout: FC = ({children}) :JSX.Element => {
    
    return (
        <>
            <Head>
                <title>Anjana Shakthi | Software Engineer(Full Stack Web Developer)</title>
                <meta name="robots" content="follow, index" />
                <meta content="full-stack web developer Mostly Specialized in JavaScript & TypeScript" name="description" />
                <meta
                name="keywords"
                content="JavaScript, TypeScript"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Anjana Shakthi" />
                <meta property="og:description" content="full-stack web developer Mostly Specialized in JavaScript & TypeScript" name="description" />
                <meta property="og:title" content="Anjana Shakthi | Software Engineer(Full Stack Web Developer)" />
            </Head>
        <div className="grid grid-cols-5 main h-screen">
            <div className='xl:col-span-1 main'>
                <LeftNavBar/>
            </div>
            <div className='col-span-5 xl:col-span-4 h-full main px-5'>
                {children}   
            </div>
        </div>
        </>
    )
}

export default HomeLayout
