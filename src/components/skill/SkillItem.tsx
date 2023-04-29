import React, { FC } from 'react';
import {Image} from 'antd';
import styles from './styles.module.css';

interface ISkillItem {
    skill: string
    imageUrl: string
}

const SkillItem :FC<ISkillItem> = ({skill,imageUrl}) :JSX.Element => {
    return (
        <div className='my-4 px-3'>
            <div className='font2xl flex justify-between items-center'>
                <div>{skill}</div>
                <div className={`bg-pink-500 rounded-full ${styles.framworkIcon}`}>
                    <Image alt={skill} width={65} preview={false} style={{borderRadius:"50%"}}
                        src={imageUrl} />
                </div>
            </div>
        </div>
    )
}

export default SkillItem
