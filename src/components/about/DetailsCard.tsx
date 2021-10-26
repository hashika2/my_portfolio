import React, { FC } from 'react';
import { Button } from 'antd';
import {DownloadOutlined} from '@ant-design/icons';

const DetailsCard: FC = () :JSX.Element => {
    return (
        <div>
            <p className='text-3xl text-white'>I am Anjana Shakthi</p>
            <p className='text-lg text-white'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <div className='text-xl text-white mb-5'>
            <div className='grid grid-cols-5 my-3'>
                <div>Full Name</div>
                <div className='col-span-4'>: Jayasinghe Arachchige Anjana Shakthi</div>
            </div>
            <div className='grid grid-cols-5 my-3'>
                <div>BirthDay</div>
                <div className='col-span-4'>: 18/10/1995</div>
            </div>
            <div className='grid grid-cols-5 my-3'>
                <div>Nationality</div>
                <div className='col-span-4'>: Sri Lanka</div>
            </div>
            <div className='grid grid-cols-5 my-3'>
                <div>Language</div>
                <div className='col-span-4'>: Sinhala, English</div>
            </div>
            <div className='grid grid-cols-5 my-3'>
                <div>Address</div>
                <div className='col-span-4'>: 66/A, Rubberhena, Puwakwatta, Kamburugamuwa, Matara.</div>
            </div>
            </div>
            <Button type="primary" icon={<DownloadOutlined />} size='large'>
                Download CV
            </Button>
        </div>
    )
}

export default DetailsCard
