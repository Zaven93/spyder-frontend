import React, { useState } from 'react'
import axios from 'axios'
import './style.scss'

const FourthSection = () => {
    const [params, setParams] = useState({
        email: '',
        url: ' '
    })

    const handleChange = (e) => setParams({ ...params, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.get(params.url.split('?')[0], {
            params: {
                sheetId: params.url.split('?')[1].split('=')[1],
                email: params.email
            }
        })
    }

    console.log('Params data Zaven', params)
    console.log('Parsed url', params.url.split('?')[0])
    console.log('Parse sheetid', params.url.split('?')[1].split('=')[1])
    return (
        <div className="fourth-section-container">
            <h1>Try it for free</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" placeholder="Name" />
                    <input
                        name="email"
                        value={params.email}
                        type="text"
                        placeholder="Your E-mail"
                        onChange={handleChange}
                    />
                </div>
                <input
                    name="url"
                    value={params.url}
                    placeholder="Your Google Sheet URL Here"
                    type="text"
                    onChange={handleChange}
                />
                <button>LAUNCH</button>
            </form>
        </div>
    )
}

export default FourthSection
