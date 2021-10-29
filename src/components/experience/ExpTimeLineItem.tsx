import React, { FC } from 'react'

interface IExpTimeLineItem {
    duration: string,
    position: string,
    jobType: string
}

const ExpTimeLineItem: FC<IExpTimeLineItem> = ({duration,position,jobType}) :JSX.Element => {
    return (
        <div className='grid grid-cols-5'>
            <div className='fontxl'>{duration}</div>
            <div className='col-span-4'>
                <p className='font2xl mb-1'>{position}</p>
                <p className='fontlg'>{jobType}</p>
            </div>
        </div>
    )
}

export default ExpTimeLineItem
