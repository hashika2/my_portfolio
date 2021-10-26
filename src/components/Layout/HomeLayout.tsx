import React, { FC,useState,useEffect } from 'react';
import {
    MenuOutlined
  } from '@ant-design/icons';
  import styles from './layout.module.css';
import LeftNavBar from '../navbar/LeftNavBar';




const HomeLayout: FC = ({children}) :JSX.Element => {
    
  //   const hasWindow = typeof window !== 'undefined';
  //   const getWindowDimensions = () => {
  //       const width = hasWindow ? window.innerWidth : null;
  //       return width;
  //     }
  //   const [windowDimensions, setWindowDimensions] = useState <number|null>(getWindowDimensions());

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions(getWindowDimensions());
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  
  // console.log('***************',windowDimensions)

    return (
        <>
        {/* <div className={styles.menuIcon}><MenuOutlined /></div> */}
        <div className="grid grid-cols-5">
            <div>
                <LeftNavBar/>
            </div>
            <div className='col-span-5 lg:col-span-4'>
                {children}
            </div>
        </div>
        </>
    )
}

export default HomeLayout
