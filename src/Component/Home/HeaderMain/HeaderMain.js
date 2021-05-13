import React from 'react';
import Particles from 'react-particles-js';
import particleCOnfig from './ParticleConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import svgBG from '../../../Image/shape-bg-2.png'
import './HeaderMain.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from'../../../Resume/Resume.pdf'
// import React, { Component } from 'react'
import Typical from 'react-typical'
const HeaderMain = () => {
    AOS.init();
    return (
        <div className="header">
            <div className='headerMain'>
                <div className="headerMainContainer">
                    <Particles params={particleCOnfig}>
                    </Particles>
                    <div className="d-flex justify-content-center">
                        <div className="container headerMainWrapper">
                            <div className="row">
                                <div className="col-md-8">
                                    <div data-aos="fade-up">
                                        <div className="headerMainInfo">
                                            <h3>Hi There!<p className="wave">👋</p></h3>
                                            <h2>This is Raju Ahmmad Hridoy</h2>
                                            <p>
                                                <Typical
                                                    steps={['I am a Front end web develope!', 1000, 'I am creative web developer!', 500]}
                                                    loop={Infinity}
                                                    wrapper="p"
                                                /></p>
                                            {/* <button className="resumeBtn"><FontAwesomeIcon icon={faDownload} />Download Resume</button> */}
                                            <div className="socileLink">
                                                <ul>
                                                    <li> <a href="https://www.facebook.com/rajuahmmadhrid0y"><FontAwesomeIcon icon={faFacebookF} /></a> </li>
                                                    <li> <a href="https://github.com/rajuahmmadhridoy"><FontAwesomeIcon icon={faGithub} /></a> </li>
                                                    <li> <a href="https://www.linkedin.com/in/rajuahmmadhridoy-429246203/"><FontAwesomeIcon icon={faLinkedinIn} /></a> </li>
                                                    <li> <a href="https://twitter.com/rajuahmmadhrido"><FontAwesomeIcon icon={faTwitter} /></a> </li>
                                                </ul>
                                            </div>
                                           <div> <a className="resume" href={resume} download>DOWNLOAD RESUME</a></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="svgBg">
                <img src={svgBG} alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;