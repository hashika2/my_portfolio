import { Timeline } from 'antd'
import React, { FC } from 'react'
import ExpTimeLineItem from './ExpTimeLineItem'

interface IExperienceCard {
    company: string,
    place: string,
    jobs: Array<any>

}

const ExperienceCard :FC<IExperienceCard> = ({company,place,jobs}) :JSX.Element => {
    return (
        <div className='p-5'>
            <p className='font3xl  mb-1'>{company}</p>
            <p className='fontlg'>{place}</p>
            <Timeline>
                {jobs.map((item,index) => {
                    return(
                        <Timeline.Item key={index} color="green">
                            <ExpTimeLineItem
                                duration={item.duration}
                                position={item.position}
                                jobType={item.jobType}
                            />
                        </Timeline.Item>
                    )
                })}
            </Timeline>
        </div>
    )
}

export default ExperienceCard
