import React, { FC } from 'react'

interface IExpTimeLineItem {
    duration: string,
    position: string,
    jobType: string
}

const ExpTimeLineItem: FC<IExpTimeLineItem> = ({duration,position,jobType}) :JSX.Element => {
    return (
        <div className='grid grid-cols-5'>
            <div className='text-md'>{duration}</div>
            <div className='col-span-4'>
                <p className='text-lg mb-1'>{position}</p>
                <p className='text-md'>{jobType}</p>
            </div>
        </div>
    )
}

export default ExpTimeLineItem
