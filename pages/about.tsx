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
                    <div className='bg-green-500 w-80 p-5 flex justify-end rounded-r-full'>
                    <Image alt='profile' width={300} preview={false} style={{borderRadius:"50%"}}
                        src="https://res.cloudinary.com/ashakthi/image/upload/v1635839334/samples/protfolio/about_odyeo9.png" />
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
