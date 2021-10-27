import HeaderTitle from '../src/components/common/HeaderTitle';
import React, { FC } from 'react'
import EducationCard from '../src/components/education/EducationCard';

const education :FC = () :JSX.Element => {
    return (
        <div>
            <HeaderTitle title="ECUCATION"/>
            <div>
                <EducationCard/>
            </div>
        </div>
    )
}

export default education
