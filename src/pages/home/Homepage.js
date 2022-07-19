import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div>
            <h2>Homepage</h2>
            <Link to='/login'>Login</Link>
            <Link to='/app/dashboard'>Dashboard</Link>
        </div>
    )
}

export default Homepage