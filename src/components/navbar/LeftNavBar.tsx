import React, { FC,useState } from 'react';
import { Menu, Button,Drawer } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined
  } from '@ant-design/icons';


const LeftNavBar:FC = () :JSX.Element => {
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    return (
        
        <div>
            <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
        <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
        </div>
    )
}

export default LeftNavBar
