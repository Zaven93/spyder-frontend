import React from 'react'
import './style.scss'

const FifthSection = () => {
    return (
        <div className="fifth-section-container">
            <div className="header">
                <h1>About us</h1>
                <p>
                    Team of passionate individuals who make a significant difference in no time. Our
                    goal is to make it simple to manage your everyday processes so you can have more
                    articles published, close more deals and get things done.
                </p>
            </div>
            <div className="team-container">
                <h1>Meet the team</h1>
                <div className="team-images">
                    <div className="first-row">
                        <div>
                            <span className="avatar"></span>
                            <h1>Mary</h1>
                            <p>
                                <span>Chief Strategy</span>
                                <span>Officer</span>
                            </p>
                        </div>
                        <div>
                            <span className="avatar"></span>
                            <h1>Serine</h1>
                            <p>
                                <span>Tool</span>
                                <span>Strategist</span>
                            </p>
                        </div>
                        <div>
                            <span className="avatar"></span>
                            <h1>Zaven</h1>
                            <p>
                                <span>Software</span> <span>Engineer</span>
                            </p>
                        </div>
                    </div>
                    <div className="second-row">
                        <div>
                            <span className="avatar"></span>
                            <h1>Mher</h1>
                            <p>
                                <span>Software</span> <span>Engineer</span>
                            </p>
                        </div>
                        <div>
                            <span className="avatar"></span>
                            <h1>Lilit</h1>
                            <p>
                                <span>Copywrighter</span>
                            </p>
                        </div>
                        <div>
                            <span className="avatar"></span>
                            <h1>Ed</h1>
                            <p>
                                <span>Designer</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection
