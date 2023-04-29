import React, { FC } from 'react'
import { Image } from 'antd';
import {GithubOutlined,EyeOutlined} from '@ant-design/icons';
import { projectDetails } from '../../utils/commenDetails';

const ProjectCard :FC = () :JSX.Element => {
    return (
        <div className=''>
            {
                projectDetails.map((project,index) => {
                    return(
                        <div className='grid grid-cols-3 border-2 p-3 m-3 border-pink-500 rounded-lg' key={index}>
                            <div className='mx-2 col-span-3 md:col-span-1'>
                                <Image 
                                    src={project.imageUrl}
                                    alt={project.name}
                                    width= "100%"
                                    height="12rem"
                                    preview={false}
                                    />
                                <div className='space-x-2'>
                                    <div className='inline-block'>{project?.gitHubUrl && <a href={project?.gitHubUrl}><GithubOutlined style={{ fontSize: '25px', color: 'white' }} /></a>}</div>
                                    <div className='inline-block'>{project?.viewUrl && <a href={project?.viewUrl}><EyeOutlined style={{ fontSize: '25px', color: 'white' }}/></a>}</div>
                                </div>
                            </div>
                            <div className='col-span-3 md:col-span-2 m-3'>
                                <div className='h-4/5'>
                                    <p className='fontlg'>{project.name}</p>
                                    <p className='fontmd'>{project.description}</p>
                                </div>
                                <div className='titleUnderline'></div>
                                <div className='space-x-2 my-3'>
                                    {project.technologies.map((tech,index) => {
                                        return( 
                                            <div className='inline-block fontmd border-r-2 border-green-500 px-2' key={index}>{tech}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectCard;
