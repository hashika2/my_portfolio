import React, { FC } from 'react';
import {Image} from 'antd';
import HeaderTitle from '../src/components/common/HeaderTitle'
import DetailsCard from '../src/components/about/DetailsCard';

const About:FC = () :JSX.Element => {
    return (
        <div>
            <HeaderTitle title="ABOUT ME"/>
            <div className='grid grid-cols-3 mb-9' >
                <div className='col-span-3 lg:col-span-1 flex items-center'>
                    <div className='bg-pink-500 w-80 p-5 flex justify-end rounded-r-full'>
                        <Image alt='Hashika Maduranga' width={300} preview={false} style={{borderRadius:"50%"}}
                        src="https://avatars.githubusercontent.com/u/37840298?v=4" />
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-2 flex items-center'>
                    <DetailsCard/>
                </div>
            </div>
        </div>
    )
}

export default About
