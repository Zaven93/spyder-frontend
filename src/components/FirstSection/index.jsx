import React from 'react'
import Fade from 'react-reveal/Fade'
import siteLogo from '../../img/logo.svg'
import './style.scss'

const FirstSection = () => {
    return (
        <div className="first-section-container">
            <Fade bottom>
                <img src={siteLogo} />
                <h1>
                    Smart <span>Spyder</span>
                </h1>
                <p>
                    Keep your database updated with one click. The only automated software to keep
                    your database up to date.
                </p>
            </Fade>
        </div>
    )
}

export default FirstSection
