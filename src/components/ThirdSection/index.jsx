import React from 'react'
import './style.scss'

const ThirdSecond = () => {
    return (
        <div className="third-section-container">
            <div className="features">
                <h1>Ready, Steady, Pitch</h1>
                <div className="features-subcontainer">
                    <div>
                        <div className="numbers">1</div>{' '}
                        <span>
                            Open the access of the Google Sheet to “Anyone with the link can edit”
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
            <div className="image"></div>
        </div>
    )
}

export default ThirdSecond
