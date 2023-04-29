import React, { FC } from 'react'
import DetailsItem from './DetailsItem';
import { PhoneOutlined,EnvironmentOutlined,MailOutlined } from '@ant-design/icons';

const ContactDetails :FC = () :JSX.Element => {
    return (
        <div>
          <DetailsItem
            title="Phone"
            icon = {<PhoneOutlined style={{fontSize:'30px', color: 'white'}} />}
            data = "+9477 4164 979"
            />
          <DetailsItem
            title="Email"
            icon = {<MailOutlined style={{fontSize:'30px', color: 'white'}}/>}
            data = "m.g.hashikamaduranga@gmail.com"
            />
          <DetailsItem
            title="Address"
            icon = {<EnvironmentOutlined style={{fontSize:'30px', color: 'white'}}/>}
            data = "188/A, Bentota Kanda, Udubettawa, Thalgampala, Galle, Sri Lanka."
            />
        </div>
    )
}

export default ContactDetails
