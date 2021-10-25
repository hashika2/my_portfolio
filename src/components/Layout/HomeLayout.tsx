import React, { FC } from 'react'

const HomeLayout: FC = ({children}) :JSX.Element => {
    return (
        <div className="grid grid-cols-5">
            <div>
                sdfsfs
            </div>
            <div className='col-span-4'>
                {children}
            </div>
        </div>
    )
}

export default HomeLayout
