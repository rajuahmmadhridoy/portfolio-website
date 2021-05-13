import React from 'react';
import './About.scss'
import aboutImg from '../../../../Image/img10.png'
// import AboutMenu from '../AboutMenu/AboutMenu';
import ShortInfo from '../ShortInfo/ShortInfo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Education from '../Education/Education';
import Skills from '../Slikills/Skills';
import Expertise from '../Expertise/Expertise';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGraduationCap,faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons'
import img from '../../../../Image/shape-bg-2.png'
const About = () => {
    return (
        <div className="about">
            <div className="aboutContainer">
                <div className="aboutBg">
                    <img src={img} alt="" />
                </div>
                <div className="container pt-5" id="about">
                    <div className="row">
                        <div className="text-center title">
                            <p>Who am</p>
                            <h3> ABOUT ME</h3>
                        </div>
                        <div className="col-md-7 aboutRouting">
                        <div data-aos="fade-left">
                        <div className="d-flex order-sm-2">
                                <Router>
                                    <div>

                                        <ul className="menu">
                                            {/* <div className="row">
                                                <div className="col-sm-6 col-md-12">
                                                       <div className="d-flex">
                                                       <li>
                                                            <Link to="/"> <span><FontAwesomeIcon icon={faBars} /></span> Short Info</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/education"><span><FontAwesomeIcon icon={faGraduationCap} /></span>Education</Link>
                                                        </li>
                                                       </div>
                                                </div>
                                                <div className="col-sm-6 col-md-12">
                                                    <div className="d-flex">
                                                        <li>
                                                            <Link to="/skills"> <span><FontAwesomeIcon icon={faBars} /></span>Skills</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/expertise"> <span><FontAwesomeIcon icon={faBars} /></span>Expertise</Link>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <li>
                                                <Link to="/"> <span><FontAwesomeIcon icon={faBars} /></span> Short Info</Link>
                                            </li>
                                            <li>
                                                <Link to="/education"><span><FontAwesomeIcon icon={faGraduationCap} /></span>Education</Link>
                                            </li>
                                            <li>
                                                <Link to="/skills"> <span><FontAwesomeIcon icon={faAssistiveListeningSystems} /></span>Skills</Link>
                                            </li>
                                            <li>
                                                <Link to="/expertise"> <span><FontAwesomeIcon icon={faBars} /></span>Expertise</Link>
                                            </li>
                                        </ul>


                                        <Switch>
                                            <Route exact path="/">
                                                <ShortInfo />
                                            </Route>
                                            <Route path="/education">
                                                <Education />
                                            </Route>
                                            <Route path="/skills">
                                                <Skills />
                                            </Route>
                                            <Route path="/expertise">
                                                <Expertise />
                                            </Route>
                                        </Switch>
                                    </div>
                                </Router>
                            </div>
                        </div>
                            
                        </div>


                        <div className="col-md-5">
                                <div className="aboutImg d-flex order-sm-1">
                                    <img src={aboutImg} alt="" />
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;