import React, { FC } from 'react';
import { PhoneOutlined } from '@ant-design/icons';

interface IDetailsItem{
    title: string,
    data: string,
    icon: any
}

const DetailsItem :FC<IDetailsItem> = ({title,data,icon}) :JSX.Element => {
    return (
        <div className='bg-gray-500 mb-5'>
            <div className='grid grid-cols-4 py-5'>
                <div className='flex justify-center'>
                    <div className='border-2 border-red-500 p-3 flex justify-center items-center w-20 h-20'>
                        {icon}
                    </div>
                </div>
                <div className='col-span-3'>
                    <p>{title}</p>
                    <p>{data}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailsItem;
