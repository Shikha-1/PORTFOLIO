import React from 'react'
import "../css/Contact.css"

function ContactItem({ icon, title, value, style }) {
    return (
        <div className="ContactItem">
            <div className="contact">
                <i className={`ico fas fa-${icon}`} style={style}></i>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p title={title}>{value}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
