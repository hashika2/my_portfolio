import React, { FC } from 'react'
import HeaderTitle from '../src/components/common/HeaderTitle';
import SkillItem from '../src/components/skill/SkillItem';
import { skillDetails } from '../src/utils/commenDetails';

const Skills :FC = () :JSX.Element => {
    return (
        <div>
            <HeaderTitle title="SKILLS"/>
            <div className='flex items-center justify-center my-10'>
                <div className='grid grid-cols-2 w-3/4'>
                    {skillDetails.map( (skill,index) => {
                        return(
                            <SkillItem key={index} skill={skill} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;
