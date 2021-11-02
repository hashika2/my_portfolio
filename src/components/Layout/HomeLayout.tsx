import React, { FC} from 'react';
import LeftNavBar from '../navbar/LeftNavBar';

const HomeLayout: FC = ({children}) :JSX.Element => {
    
    return (
        <>
        <div className="grid grid-cols-5">
            <div>
                <LeftNavBar/>
            </div>
            <div className='col-span-5 xl:col-span-4 h-full main px-5'>
                {children}   
            </div>
        </div>
        </>
    )
}

export default HomeLayout
