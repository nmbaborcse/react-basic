import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1 className="top-title"> Welcome to nTech Bangla </h1>
            <ul className="top-menu">
                <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="selected" to="/service">Services</NavLink></li>
                <li><NavLink exact activeClassName="selected" to="/blog/bangladesh">Blog</NavLink></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><NavLink exact activeClassName="selected" to="/form">Form</NavLink></li>
            </ul>
        </div>
    )
}
