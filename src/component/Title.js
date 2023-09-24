import React from 'react'
import "../css/Title.css"

function Title({ title }) {
    return (
        <div className="Title">
            <h3>
                {title}
                <span>{title}</span>
            </h3>
        </div>
    )
}

export default Title
