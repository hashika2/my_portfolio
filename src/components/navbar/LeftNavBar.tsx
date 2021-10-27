import React, { FC,useState,useEffect } from 'react';
import {MenuOutlined} from '@ant-design/icons';
import {Drawer} from 'antd'
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
        
        // <div className={visible? styles.sideBarActive :styles.sideBar}>
        // <span className={`xl:invisible ${styles.toggleBtn}`} onClick={showDrawer}><MenuOutlined/></span>
        // </div>
        <div className={styles.leftDrawer}>
          
          <span className={visible? `xl:invisible ${styles.toggleBtnActive}` :styles.toggleBtn} onClick={showDrawer}><MenuOutlined/></span> 
        <Drawer placement="left" visible={visible} mask={false} closable={false} width='270px'>
        
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      </div>
    )
}

export default LeftNavBar
