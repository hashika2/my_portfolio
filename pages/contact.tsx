import React, { FC } from 'react'
import { Image } from 'antd'
import HeaderTitle from '../src/components/common/HeaderTitle'
import ContactDetails from '../src/components/contact/ContactDetails'

const contact :FC = () :JSX.Element => {
    console.log('2222222222');
    console.log('3333333333');
    return (
        <div>
            <HeaderTitle title="CONTACT ME"/>
            <div className='grid grid-cols-2 my-10'>
                <div className='flex items-center'>
                    <div className='hidden md:inline-block'>                
                        <div className='bg-pink-500 w-80 p-5 flex justify-end rounded-r-full'>
                            <Image alt='contact me' width={300} preview={false} style={{borderRadius:"50%"}}
                            src="https://thumbs.dreamstime.com/b/contact-us-customer-support-hotline-people-connect-businessman-touching-touch-screen-blurred-city-background-79768240.jpg" />
                        </div>
                    </div>
                </div>
                <div className='px-2 col-span-2 md:col-span-1'>
                    <ContactDetails/>
                </div>
            </div>
        </div>
    )
}

export default contact
