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
                        <div className='fontxl'>{duration}</div>
                        <div className='col-span-4'>
                            <p className='font2xl'>{degree}</p>
                            <p className='fontxl'>{place}</p>
                            <p className='fontmd'>{result}</p>
                        </div>
                    </div>
    )
}

export default EduTimeLineItem;
