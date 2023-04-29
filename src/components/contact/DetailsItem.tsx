import React, { FC } from 'react';
interface IDetailsItem{
    title: string,
    data: string,
    icon: any
}

const DetailsItem :FC<IDetailsItem> = ({title,data,icon}) :JSX.Element => {
    return (
        <div className='bg-gray-800 m-2'>
            <div className='grid grid-cols-4 p-3'>
                <div className='flex justify-center'>
                    <div className='border-2 border-pink-500 p-3 flex justify-center items-center w-20 h-20'>
                        {icon}
                    </div>
                </div>
                <div className='col-span-3 px-2'>
                    <p className='font2xl'>{title}</p>
                    <p className='fontlg'>{data}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailsItem;
