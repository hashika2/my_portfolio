import React, { FC } from 'react';

const DetailsCard: FC = () :JSX.Element => {
    return (
        <div>
            <p className='font3xl'>Hashika Maduranga</p>
            <p className='fontlg'>
                I&lsquo; m graduate software engineer from the University of Kelaniya Sri Lanka. I have a 2+ years of extensive experience in software development as a software engineer.
                Mainly Specialized in JavaScript & TypeScript. A highly motivated and a hard working individual who has a passion or
                computer science and who loves to learn new technologies. Seeking an
                opportunity to gain more experience to become a qualified professional in the
                industry. .
            </p>
            <div className='fontxl mb-5'>
                <div className='grid grid-cols-4 my-3'>
                    <div className='col-span-1 '>Full Name</div>
                    <div className='col-span-3'>: Malagoda Gamage Hashika Maduranga</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>Address</div>
                    <div className='col-span-3'>: 188/A Bentota Kanda, Udubettawa, Thalgampola, Galle.</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>BirthDay</div>
                    <div className='col-span-3'>: 13th of August, 1996</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>Nationality</div>
                    <div className='col-span-3'>: Sri Lanka</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>Language</div>
                    <div className='col-span-3'>: Sinhala, English</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>Career Goal</div>
                    <div className='col-span-3'>: Senior Architect</div>
                </div>
            </div>
            {/* <Button icon={<DownloadOutlined />} size='large' type="primary" style={{ background: "rgba(16, 185, 129)"}}>
                Download CV
            </Button> */}
        </div>
    )
}

export default DetailsCard
