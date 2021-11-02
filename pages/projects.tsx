import React, { FC } from 'react'
import HeaderTitle from '../src/components/common/HeaderTitle'
import ProjectCard from '../src/components/project/ProjectCard'

const projects :FC = () :JSX.Element => {
    return (
        <div>
            <HeaderTitle title="PROJECTS"/>
            <ProjectCard/>
        </div>
    )
}

export default projects
