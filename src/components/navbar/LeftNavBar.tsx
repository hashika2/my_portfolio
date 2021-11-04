import React, { FC,useState,useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {MenuOutlined} from '@ant-design/icons';
import {Drawer,Image,Menu} from 'antd';
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
    const {pathname} = useRouter();

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
        <div>
          <span className={visible? `xl:invisible ${styles.toggleBtnActive}` :styles.toggleBtn} onClick={showDrawer}><MenuOutlined/></span> 
          <Drawer placement="left" visible={visible} mask={false} closable={false} width='270px' bodyStyle={{backgroundColor:'#001529'}}>
            <div>
              <div className='my-5'>
                <Image alt='Anjana Shakthi' width={200} preview={false} style={{borderRadius:"50%"}}
                          src="https://res.cloudinary.com/ashakthi/image/upload/v1635785771/samples/protfolio/profile3_yuc7vr.png" />
              </div>
              <hr className='mb-5'></hr>
              <Menu
                defaultSelectedKeys={['/']}
                mode="inline"
                theme="dark"
                selectedKeys = {[pathname]}
                >
                  <Menu.Item key="/" className={styles.a}>
                    <Link href="/">HOME</Link>
                  </Menu.Item>
                  <Menu.Item key="/about">
                    <Link href="/about">ABOUT</Link>
                  </Menu.Item>
                  <Menu.Item key="/skills">
                    <Link href="/skills">SKILLS</Link>
                  </Menu.Item>
                  <Menu.Item key="/education">
                    <Link href="/education">EDUCATION</Link>
                  </Menu.Item>
                  <Menu.Item key="/experience">
                    <Link href="/experience">EXPERIENCE</Link>
                  </Menu.Item>
                  <Menu.Item key="/projects">
                    <Link href="/projects">PORJECTS</Link>
                  </Menu.Item>
                  <Menu.Item key="/contact">
                    <Link href="/contact">CONTACT ME</Link>
                  </Menu.Item>
                </Menu>
              </div>
            </Drawer>  
        </div>
    )
}

export default LeftNavBar
