import React, { useState } from 'react'
import axios from 'axios'
import './style.scss'

const FourthSection = () => {
    const [params, setParams] = useState({
        name: '',
        email: '',
        url: ''
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
        await axios.get('https://stormy-headland-86460.herokuapp.com/v1/load-sheet', {
            params: {
                sheetId,
                email: params.email
            }
        })
        setLoading(false)
        setParams({
            name: '',
            email: '',
            url: ''
        })
    }

    return (
        <div className="fourth-section-container">
            <h1>Try it for free</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        name="name"
                        value={params.name}
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                    />
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
                <button style={{ opacity: loading ? '0.5' : '1' }}>LAUNCH</button>
            </form>
        </div>
    )
}

export default FourthSection
