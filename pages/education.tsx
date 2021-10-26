import Title from '../src/components/common/Title';
import React, { FC } from 'react'
import EducationTimeLine from '../src/components/education/EducationTimeLine';

const education :FC = () :JSX.Element => {
    return (
        <div>
            <Title title="ECUCATION"/>
            <div>
                <EducationTimeLine/>
            </div>
        </div>
    )
}

export default education
