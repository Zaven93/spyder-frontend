import React from 'react'
import './styles.scss'
import sectionImage from '../../img/section_2_mobile_image.jpg'

const SecondSection = () => {
    return (
        <div className="second-section-container">
            <div className="container">
                <h1>Say hello to instant & hassle-free PR database updating</h1>
                <p>
                    Forget about hours spent on updating journalists’ contacts. With Smart Spyder,
                    you can update your database — including journalists’ emails, job titles, phone
                    numbers, and topics covered — in seconds and with 99.9% accuracy.
                </p>
                <img src={sectionImage} alt="" />
            </div>
        </div>
    )
}

export default SecondSection
