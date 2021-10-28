import React, { FC } from 'react'
import DetailsItem from './DetailsItem';
import { PhoneOutlined,EnvironmentOutlined,MailOutlined } from '@ant-design/icons';

const ContactDetails :FC = () :JSX.Element => {
    return (
        <div>
           <DetailsItem
                title="Phone"
                icon = {<PhoneOutlined style={{fontSize:'30px'}} />}
                data = "+9171 2073 771"
           />
           <DetailsItem
                title="Email"
                icon = {<MailOutlined style={{fontSize:'30px'}}/>}
                data = "+9171 2073 771"
           />
           <DetailsItem
                title="Address"
                icon = {<EnvironmentOutlined style={{fontSize:'30px'}}/>}
                data = "+9171 2073 771"
           />
        </div>
    )
}

export default ContactDetails
