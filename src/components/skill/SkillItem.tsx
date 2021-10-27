import React, { FC } from 'react';

interface ISkillItem {
    skill: string
}

const SkillItem :FC<ISkillItem> = ({skill}) :JSX.Element => {
    return (
        <div className='my-4'>
            <div className='text-xl mb-2'>{skill}</div>
            <div className='space-x-4'>
                <div className='titleUnderline inline-block'></div>
                <div className='titleUnderline inline-block'></div>
                <div className='titleUnderline inline-block'></div>
            </div>
            
        </div>
    )
}

export default SkillItem
