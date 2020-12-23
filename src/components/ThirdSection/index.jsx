import React from 'react'
import Fade from 'react-reveal/Fade'
import './style.scss'

const ThirdSecond = () => {
    return (
        <div className="third-section-container">
            <Fade right cascade>
                <div className="features">
                    <h1>Ready, Steady, Pitch</h1>
                    <div className="features-subcontainer">
                        <div>
                            <div className="numbers">1</div>{' '}
                            <span>
                                Open the access of the Google Sheet to “Anyone with the link can
                                edit”
                            </span>
                        </div>
                        <div>
                            <div className="numbers">2</div>{' '}
                            <span>Copy and paste the URL of your Google Sheet</span>
                        </div>
                        <div>
                            <div className="numbers">3</div> <span>Press the “Launch” button</span>
                        </div>
                        <div>
                            <div className="numbers">4</div>{' '}
                            <span>Now your database will be updated every 24 hours!</span>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade left>
                <div className="image"></div>
            </Fade>
            <div className="distortion"></div>
        </div>
    )
}

export default ThirdSecond
