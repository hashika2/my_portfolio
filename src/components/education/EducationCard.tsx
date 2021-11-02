import React, { FC } from 'react';
import {Timeline} from 'antd';
import EduTimeLineItem from './EduTimeLineItem';
import {educationDetails} from '../../utils/commenDetails';


const EducationCard :FC = () :JSX.Element => {
    return (
        <div className='p-5'>
            <Timeline>
                {educationDetails.map( (edu,index) => {
                    return(
                        <Timeline.Item key={index} color="green">
                            <EduTimeLineItem 
                                duration= {edu.duration}
                                degree={edu.degree}
                                place={edu.place}
                                result={edu.result}
                            />
                        </Timeline.Item>    
                    )
                })}
            </Timeline>,
        </div>
    )
}

export default EducationCard;
