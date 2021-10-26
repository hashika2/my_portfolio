import React, { FC } from 'react';
import {Timeline} from 'antd';
import EducationCard from './EducationCard';


const EducationTimeLine :FC = () :JSX.Element => {
    return (
        <div>
            <Timeline>
                <Timeline.Item>
                    {/* <div className='grid grid-cols-5'>
                        <div>2018 - 2021</div>
                        <div className='col-span-4'>
                            <p>B.Sc (Hons.) Software Engineering</p>
                            <p>University of Kelaniya</p>
                            <p>Chemisty-A Physics-A</p>
                        </div>
                    </div> */}
                    <EducationCard/>
                </Timeline.Item>
    <Timeline.Item><EducationCard/></Timeline.Item>
    <Timeline.Item><EducationCard/></Timeline.Item>
  </Timeline>,
        </div>
    )
}

export default EducationTimeLine
