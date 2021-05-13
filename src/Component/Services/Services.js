import React from 'react';
import './Services.scss'
// import img from '../../Image/shape-bg-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
    return (
        <div className="services" id="services">
            {/* <div className="servicesJVGIMG">
                <img src={img} alt="" />
            </div> */}
            <div className="container">
                <div className="servicesTopInfo text-center title">
                    <p>What I can do</p>
                    <h2>SERVICES</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <div data-aos="fade-up">
                            <div className="servicesInfo">
                                <h1><FontAwesomeIcon icon={faDownload} /></h1>
                                <h2>Business Consulting</h2>
                                <p>Progressively innovate high standards in best practices via customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div data-aos="fade-up">
                        <div className="servicesInfo">
                            <h1><FontAwesomeIcon icon={faDownload} /></h1>
                            <h2>Business Consulting</h2>
                            <p>Progressively innovate high standards in best practices via customer</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div data-aos="fade-up">
                        <div className="servicesInfo">
                            <h1><FontAwesomeIcon icon={faDownload} /></h1>
                            <h2>Business Consulting</h2>
                            <p>Progressively innovate high standards in best practices via customer</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;