import React, { FC } from 'react'
import DetailsItem from './DetailsItem';
import { PhoneOutlined,EnvironmentOutlined,MailOutlined } from '@ant-design/icons';

const ContactDetails :FC = () :JSX.Element => {
    return (
        <div>
             <div className='grid grid-cols-3'>
                  <div>
                  <DetailsItem
                    title="Phone"
                    icon = {<PhoneOutlined style={{fontSize:'30px'}} />}
                    data = "+9171 2073 771"
                    />
                  </div>
                  <div>
                  <DetailsItem
                    title="Email"
                    icon = {<MailOutlined style={{fontSize:'30px'}}/>}
                    data = "anjanashakthi95@gmail.com"
                    />
                  </div>
                  <div>
                  <DetailsItem
                    title="Address"
                    icon = {<EnvironmentOutlined style={{fontSize:'30px'}}/>}
                    data = "66/A, Rubberhena, Puwakwatta, Kamburugamuwa, Matara, Sri Lanka."
                    />
                  </div>
             </div>
        </div>
    )
}

export default ContactDetails
