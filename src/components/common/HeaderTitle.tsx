import React, { FC } from 'react';

interface IHeaderTitleProps {
    title: string
  }

const HeaderTitle :FC<IHeaderTitleProps> = ({title}) :JSX.Element => {
    return (
        <div className='mt-24 m-3'>
            <p className='text-4xl mb-2 text-white'>{title}</p>
            <div className='titleUnderline'></div>
        </div>
    )
}

export default HeaderTitle;
