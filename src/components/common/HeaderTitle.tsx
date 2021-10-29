import React, { FC } from 'react';

interface IHeaderTitleProps {
    title: string
  }

const HeaderTitle :FC<IHeaderTitleProps> = ({title}) :JSX.Element => {
    return (
        <div className='mt-24 mb-12'>
            <p className='fontTitle mb-2'>{title}</p>
            <div className='titleUnderline'></div>
        </div>
    )
}

export default HeaderTitle;
