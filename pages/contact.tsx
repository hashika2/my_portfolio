import React, { FC } from 'react'
import { Image } from 'antd'
import HeaderTitle from '../src/components/common/HeaderTitle'
import ContactDetails from '../src/components/contact/ContactDetails'
import ContactForm from '../src/components/contact/ContactForm'

const contact :FC = () :JSX.Element => {
    return (
        <div>
            <HeaderTitle title="CONTACT ME"/>
            <ContactDetails/>
            <div className='grid grid-cols-2 my-10'>
                <div className='hidden md:inline-block '>                
                    <div className='flex items-center'>
                        <div className='bg-green-500 w-80 p-5 flex justify-end rounded-r-full'>
                            <Image alt='profile' width={300} preview={false} style={{borderRadius:"50%"}}
                            src="https://res.cloudinary.com/ashakthi/image/upload/v1635839208/samples/protfolio/1_stisfr.png" />
                        </div>
                </div>
                </div>

                <div className='px-2 col-span-2 md:col-span-1'>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default contact
