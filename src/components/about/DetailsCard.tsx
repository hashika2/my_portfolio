import React, { FC } from 'react';
import { Button } from 'antd';
import {DownloadOutlined} from '@ant-design/icons';

const DetailsCard: FC = () :JSX.Element => {
    return (
        <div>
            <p className='font3xl'>My Name is Anjana Shakthi</p>
            <p className='fontlg'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <div className='fontxl mb-5'>
            <div className='grid grid-cols-4 my-3'>
                <div className='col-span-1 '>Full Name</div>
                <div className='col-span-3'>: Jayasinghe Arachchige Anjana Shakthi</div>
            </div>
            <div className='grid grid-cols-4 my-3'>
                <div>Address</div>
                <div className='col-span-3'>: 66/A, Rubberhena, Puwakwatta, Kamburugamuwa, Matara.</div>
            </div>
            <div className='grid grid-cols-4 my-3'>
                <div>BirthDay</div>
                <div className='col-span-3'>: 18th of October, 1995</div>
            </div>
            <div className='grid grid-cols-4 my-3'>
                <div>Nationality</div>
                <div className='col-span-3'>: Sri Lanka</div>
            </div>
            <div className='grid grid-cols-4 my-3'>
                <div>Language</div>
                <div className='col-span-3'>: Sinhala, English</div>
            </div>
            <div className='grid grid-cols-4 my-3'>
                <div>Career Goal</div>
                <div className='col-span-3'>: Senior Architect</div>
            </div>
            
            </div>
            <Button icon={<DownloadOutlined />} size='large' type="primary" style={{ background: "rgba(16, 185, 129)"}}>
                Download CV
            </Button>
        </div>
    )
}

export default DetailsCard
