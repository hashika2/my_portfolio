
import React from 'react'
import HeaderTitle from '../src/components/common/HeaderTitle'
import ExperienceCard from '../src/components/experience/ExperienceCard'
import { experienceDetails } from '../src/utils/experience'

const experience = () => {
    return (
        <div>
           <HeaderTitle title="EXPERIENCE"/>
           {experienceDetails.map((exp,index) => {
               return(
                <div key={index} className='mx-10'>
                <ExperienceCard
                    company={exp.company}
                    place={exp.place}
                    jobs={exp.job}
                />
                </div>
               )
           })}
           
        </div>
    )
}

export default experience
