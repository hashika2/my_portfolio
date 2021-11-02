import React, { FC } from 'react'
import DetailsItem from './DetailsItem';
import { PhoneOutlined,EnvironmentOutlined,MailOutlined } from '@ant-design/icons';

const ContactDetails :FC = () :JSX.Element => {
    return (
        <div>
          <DetailsItem
            title="Phone"
            icon = {<PhoneOutlined style={{fontSize:'30px', color: 'white'}} />}
            data = "+9471 2073 771"
            />
          <DetailsItem
            title="Email"
            icon = {<MailOutlined style={{fontSize:'30px', color: 'white'}}/>}
            data = "anjanashakthi.ja@gmail.com"
            />
          <DetailsItem
            title="Address"
            icon = {<EnvironmentOutlined style={{fontSize:'30px', color: 'white'}}/>}
            data = "66/A, Rubberhena, Puwakwatta, Kamburugamuwa, Matara, Sri Lanka."
            />
        </div>
    )
}

export default ContactDetails
