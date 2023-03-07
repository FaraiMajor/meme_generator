import React from "react";
import logo from '../images/logo.svg'

export default function Header() {
    return (
        <nav className='nav'>
            <img src={logo} alt="logo" />
            <h1 className='logo-name'>Meme Generator</h1>
            <p className='nav-title'>React Project</p>
        </nav>
    )
}