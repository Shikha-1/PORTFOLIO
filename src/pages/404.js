import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div className='PageNotFound'>
            <h3>404 | Page Not Found </h3>
            <p>Are You Lost?</p>
            <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
    )
}

export default PageNotFound