import React, { useState } from 'react'
import axios from 'axios'
import './style.scss'

const FourthSection = () => {
    const [params, setParams] = useState({
        email: '',
        url: ' '
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setParams({ ...params, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        if (loading) return
        e.preventDefault()
        setLoading(true)
        const sheetId = params.url?.split('/d/')[1]?.split('/')[0]
        if (!sheetId) return setLoading(false)
        console.log(sheetId) 
        await axios.get('https://stormy-headland-86460.herokuapp.com/v1/load-sheet/v1/load-sheet', {
            params: {
                sheetId,
                email: params.email
            }
        })
        setLoading(false)
    }

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
                <button style={{background: loading ? '#ffffff' : '#f78a35'}}>LAUNCH</button>
            </form>
        </div>
    )
}

export default FourthSection
