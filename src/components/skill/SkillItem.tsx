import React, { FC } from 'react';
import {Image} from 'antd';
import styles from './styles.module.css';

interface ISkillItem {
    skill: string
}

const SkillItem :FC<ISkillItem> = ({skill}) :JSX.Element => {
    return (
        <div className='my-4 px-3'>
            <div className='font2xl flex justify-between items-center'>
                <div>{skill}</div>
                <div className={`bg-green-500 rounded-full ${styles.framworkIcon}`}>
                    <Image alt='profile' width={60} preview={false} style={{borderRadius:"50%"}}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </div>
            </div>
            {/* <div className='space-x-4'>
                <div className='titleUnderline inline-block'></div>
                <div className='titleUnderline inline-block'></div>
                <div className='titleUnderline inline-block'></div>
            </div> */}
            
        </div>
    )
}

export default SkillItem
