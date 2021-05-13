import React from 'react';

import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
    return (
           <div className="mainMenu fiedTop">
                <nav class="navbar navbar-expand-lg container ">
                <a class="navbar-brand name-color" href="#">Raju Ahmmad</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><FontAwesomeIcon icon={faBars}  /></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        
                        <li class="nav-item  me-2">
                        <HashLink smooth to="#home">Home</HashLink>
                        </li>
                        <li class="nav-item  me-2">
                        <HashLink smooth to="#about">About</HashLink>
                        </li>
                        <li class="nav-item  me-2">
                        <HashLink smooth to="#services">Services</HashLink>
                        </li>
                        <li class="nav-item  me-2">
                        <HashLink smooth to="#blogs">Blogs</HashLink>
                        </li>

                        <li class="nav-item  me-2">
                        <HashLink smooth to="#contact">Contact</HashLink>
                        </li>
                    </ul>
                </div>
        </nav>
           </div>
    );
};

export default Navbar;