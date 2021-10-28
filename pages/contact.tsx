import React, { FC } from 'react'
import HeaderTitle from '../src/components/common/HeaderTitle'
import ContactDetails from '../src/components/contact/ContactDetails'
import ContactForm from '../src/components/contact/ContactForm'

const contact :FC = () :JSX.Element => {
    return (
        <div>
            <HeaderTitle title="CONTACT ME"/>
            <div className='grid grid-cols-2 mt-20'>
                <div className='justify-center px-2'>
                    <ContactForm/>
                </div>
                <div className='px-2'>
                    <ContactDetails/>
                </div>
            </div>
        </div>
    )
}

export default contact
