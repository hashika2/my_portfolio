import React, { FC } from 'react'
import DetailsItem from './DetailsItem';
import { PhoneOutlined,EnvironmentOutlined,MailOutlined } from '@ant-design/icons';

const ContactDetails :FC = () :JSX.Element => {
    return (
        <div>
             <div className='grid grid-cols-2'>
                  <div className='col-span-2 md:col-span-1'>
                    <DetailsItem
                      title="Phone"
                      icon = {<PhoneOutlined style={{fontSize:'30px', color: 'white'}} />}
                      data = "+9171 2073 771"
                      />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <DetailsItem
                      title="Email"
                      icon = {<MailOutlined style={{fontSize:'30px', color: 'white'}}/>}
                      data = "anjanashakthi.ja@gmail.com"
                      />
                    </div>
                 
             </div>
             <div className='grid grid-cols-5'>
                <div></div>
                <div className='col-span-5 md:col-span-3'>
                  <DetailsItem
                    title="Address"
                    icon = {<EnvironmentOutlined style={{fontSize:'30px', color: 'white'}}/>}
                    data = "66/A, Rubberhena, Puwakwatta, Kamburugamuwa, Matara, Sri Lanka."
                    />
                </div>
             </div>
             <div></div>
        </div>
    )
}

export default ContactDetails
