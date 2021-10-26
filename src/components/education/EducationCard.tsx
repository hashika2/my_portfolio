import React, { FC } from 'react'

const EducationCard :FC = () :JSX.Element => {
    return (
            <div className='grid grid-cols-5'>
                        <div>2018 - 2021</div>
                        <div className='col-span-4'>
                            <p>B.Sc (Hons.) Software Engineering</p>
                            <p>University of Kelaniya</p>
                            <p>Chemisty-A Physics-A</p>
                        </div>
                    </div>
    )
}

export default EducationCard;
