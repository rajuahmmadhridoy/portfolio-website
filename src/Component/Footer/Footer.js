import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'
const Footer = () => {
    return (
        <div className="contractInfo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 mb-5">
                        <div className="d-flex align-items-center">
                            <div className="logo">
                                <h2><FontAwesomeIcon icon={faMapMarkerAlt} /></h2>
                            </div>
                            <div className="info">
                                <h4>ADDRESS</h4>
                                <p>Bazra,Sonaimuri,Noakhali.</p>
                                <p>Post code: 3824</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-5">
                        <div className="d-flex align-items-center">
                            <div className="logo">
                                <h2><FontAwesomeIcon icon={faPhone} /></h2>
                            </div>
                            <div className="info">
                                <h4>
                                    CALL ME</h4>
                                <p>personal: 01879028959</p>
                                <p>personal: 01879028959</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-5">
                        <div className="d-flex align-items-center">
                            <div className="logo">
                                <h2><FontAwesomeIcon icon={faClock} /></h2>
                            </div>
                            <div className="info">
                                <h4>
                                    WORK HOURS</h4>
                                <p>Monday - Friday : 09am - 18pm</p>
                                <p>Saturday : 09am - 1pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="socialLink ">
                    <ul className="d-flex socialIcon justify-content-center">
                        <li> <a href="https://www.facebook.com/rajuahmmadhrid0y"><FontAwesomeIcon icon={faFacebookF} /></a> </li>
                        <li> <a href="https://github.com/rajuahmmadhridoy"><FontAwesomeIcon icon={faGithub} /></a> </li>
                        <li> <a href="https://www.linkedin.com/in/rajuahmmadhridoy-429246203/"><FontAwesomeIcon icon={faLinkedinIn} /></a> </li>
                        <li> <a href="https://twitter.com/rajuahmmadhrido"><FontAwesomeIcon icon={faTwitter} /></a> </li>
                    </ul>
                </div>
                <p className="text-center copyRight mt-3">@ {(new Date().getFullYear())} Raju Ahmmad | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;