import React, { FC } from 'react'
import { Image } from 'antd';
import {GithubOutlined,EyeOutlined} from '@ant-design/icons';

const ProjectCard :FC = () :JSX.Element => {
    return (
        <div className='p-5'>
            <div className='grid grid-cols-3'>
                <div className='mx-2'>
                    <Image 
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" 
                        alt="projectImage"
                        width= "100%"
                        height="12rem"
                        />
                        <div className='space-x-2'>
                            <div className='inline-block'><GithubOutlined style={{ fontSize: '20px', color: '#08c' }} /></div>
                            <div className='inline-block'><EyeOutlined style={{ fontSize: '20px', color: '#08c' }}/></div>
                        </div>
                    </div>
                <div className='col-span-2 w'>
                    <div className='h-48'>
                        <p className='text-lg'>QuantAmount</p>
                    </div>
                    <div className='titleUnderline'></div>
                    <div className='space-x-2 my-3'>
                        <div className='inline-block'>ReactJs</div>
                        <div className='inline-block'>NojeJS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
