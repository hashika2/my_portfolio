import React, { FC } from 'react';
import {Timeline} from 'antd';
import EduTimeLineItem from './EduTimeLineItem';
import {educationDetails} from '../../utils/education';


const EducationCard :FC = () :JSX.Element => {
    return (
        <div className='p-5'>
            <Timeline>
                {educationDetails.map( (edu,index) => {
                    return(
                   
                        <Timeline.Item key={index}>
                            <EduTimeLineItem 
                                duration= {edu.duration}
                                degree={edu.degree}
                                place={edu.place}
                                result={edu.result}
                            />
                        </Timeline.Item>
                        
                    )
                })}
                
                {/* <Timeline.Item>
                    <EduTimeLineItem
                        duration='2012 - 2016'
                        degree='GCE Advanced Level'
                        place="ST.Thomas' Boys' College Matara"
                        result='Maths-A Chemisty-B physics-B'
                    />
                </Timeline.Item>
                <Timeline.Item>
                    <EduTimeLineItem
                        duration='2006 - 2011'
                        degree='GCE Ordinary Level'
                        place="ST.Thomas' Boys' College Matara"
                        result='A-4 B-2 C-3'
                    />
                </Timeline.Item> */}
        </Timeline>,
        </div>
    )
}

export default EducationCard;
