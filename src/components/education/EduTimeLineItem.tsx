import React, { FC } from 'react'

interface IEducationDetails {
    duration: string,
    degree: string,
    place: string,
    result?:string
}

const EduTimeLineItem :FC <IEducationDetails> = ({duration,degree,place,result}) :JSX.Element => {
    return (
            <div className='grid grid-cols-5'>
                        <div className='text-xl'>{duration}</div>
                        <div className='col-span-4'>
                            <p className='text-xl'>{degree}</p>
                            <p className='text-lg'>{place}</p>
                            <p>{result}</p>
                        </div>
                    </div>
    )
}

export default EduTimeLineItem;
