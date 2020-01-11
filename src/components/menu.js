import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    
    <div style= {{
        background: '#f4f4f4',
        marginBottom: '0'
    }}>
        <ul style = {{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'}}>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>

    </div>
)

export default Menu