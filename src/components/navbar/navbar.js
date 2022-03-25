import React from "react";

import './navbar.css'

const Navbar = () => {
    
    const LINKS = [
        {title: 'About me', url: '/aboutMe'},
        {title: 'Jobs', url: '/jobs'},
        {title: 'Education', url: '/education'},
        {title: 'Hobbies', url: '/hobbies'},
        {title: 'Contact Me', url: '/contactMe'}
    ];

    return <ul className="navbar">
        {LINKS.map((link, index) => {
            return <li key={'link_' + index}>
                <a href={link.url}>{link.title}</a>
            </li>
        })}
    </ul>


};

export default Navbar;