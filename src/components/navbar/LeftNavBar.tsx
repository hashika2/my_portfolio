import React, { FC,useState,useEffect } from 'react';
import {MenuOutlined} from '@ant-design/icons';
import styles from './styles.module.css';

const getWindowDimensions = () : boolean => {
  const hasWindow = typeof window !== 'undefined';
  const width = hasWindow ? window.innerWidth : null;
  if(width && width < 1280){
    return false;
  }
  return true;
}


const LeftNavBar:FC = () :JSX.Element => {
    const [visible, setVisible] = useState <boolean>(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      
      setVisible(getWindowDimensions())
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showDrawer = () => {
    setVisible(!visible);
  };

    return (
        
        <div className={visible? styles.sideBarActive :styles.sideBar}>
        <span className={`xl:invisible ${styles.toggleBtn}`} onClick={showDrawer}><MenuOutlined/></span>
        </div>
    )
}

export default LeftNavBar
