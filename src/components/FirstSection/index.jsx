import React from 'react'
import siteLogo from '../../img/logo.svg'
import './style.scss'

const FirstSection = () => {
    return (
        <div className="first-section-container">
            <img src={siteLogo} />
            <h1>
                Smart <span>Spyder</span>
            </h1>
            <p>
                Keep your database updated with one click. The only automated software to keep your
                database up to date.
            </p>
        </div>
    )
}

export default FirstSection
