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
                        <div className='grid grid-cols-3 border-2 p-2 m-2 border-green-500 rounded-lg' key={index}>
                            <div className='mx-2'>
                                <Image 
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" 
                                    alt="projectImage"
                                    width= "100%"
                                    height="12rem"
                                    preview={false}
                                    />
                                    <div className='space-x-2'>
                                        <div className='inline-block'><GithubOutlined style={{ fontSize: '25px', color: 'white' }} /></div>
                                        <div className='inline-block'><EyeOutlined style={{ fontSize: '25px', color: 'white' }}/></div>
                                    </div>
                                </div>
                            <div className='col-span-2 m-3'>
                                <div className='h-4/5'>
                                    <p className='fontlg'>{project.name}</p>
                                    <p className='fontmd'>{project.description}</p>
                                </div>
                                <div className='titleUnderline'></div>
                                <div className='space-x-2 my-3'>
                                    {project.technologies.map((tech,index) => {
                                        return(
                                            <div className='inline-block fontmd' key={index}>{tech}</div>
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
