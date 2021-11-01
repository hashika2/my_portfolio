import React, { FC } from 'react'
import HeaderTitle from '../src/components/common/HeaderTitle';
import SkillItem from '../src/components/skill/SkillItem';
import { skillDetails } from '../src/utils/commenDetails';

const Skills :FC = () :JSX.Element => {
    return (
        <div>
            <HeaderTitle title="SKILLS"/>
                <div className='px-3'>
                    {skillDetails.map( (skill,index) => {
                        return(
                            <div className='grid grid-cols-2' key={index}>
                                <div className='col-span-2 md:col-span-1'>
                                    <SkillItem  skill={skill.skill1} imageUrl ={skill.skill1Url} />
                                </div>
                                <div className='col-span-2 md:col-span-1'>
                                    <SkillItem skill={skill.skill2} imageUrl={skill.skill2Url} />
                                </div>
                            </div>   
                        )
                    })}
            </div>
        </div>
    )
}

export default Skills;
