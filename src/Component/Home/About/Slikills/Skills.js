import React from 'react';
import './Skills.scss'
const Skills = () => {
    return (
        <div>
            <p className="skillAbout">Seeking for Web Development work at companies that allows of the implementation of
                    my communication, service, and design skills to the programming essentials.</p>
            <h3>My Skills</h3>

            <div className="row">

                <div className="col-md-6">
                    <div className="skillItems">
                        <h6>HTML</h6>
                        <div class="containerbeta d-flex align-items-center">
                            <div class="skills html"></div>
                            <div className="per">90%</div>
                        </div>
                    </div>

                    <div className="skillItems">
                        <h6>CSS</h6>
                        <div class="containerbeta d-flex align-items-center ">
                            <div class="skills css"></div>
                            <div className="per">80%</div>
                        </div>
                    </div>
                    <div className="skillItems">
                        <h6>Bootstrap</h6>
                        <div class="containerbeta d-flex align-items-center ">
                            <div class="skills bootstrap"></div>
                            <div className="per">90%</div>
                        </div>
                    </div>

                    <div className="skillItems">
                        <h6>JavaScript</h6>
                        <div class="containerbeta d-flex align-items-center">
                            <div class="skills js"></div>
                            <div className="per">65%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skillItems">
                        <h6>React</h6>
                        <div class="containerbeta  d-flex align-items-center">
                            <div class="skills react"></div>
                            <div className="per">80%</div>
                        </div>
                    </div>
                    <div className="skillItems">
                        <h6>React</h6>
                        <div class="containerbeta  d-flex align-items-center">
                            <div class="skills react"></div>
                            <div className="per">80%</div>
                        </div>
                    </div>
                    <div className="skillItems">
                        <h6>React</h6>
                        <div class="containerbeta  d-flex align-items-center">
                            <div class="skills react"></div>
                            <div className="per">80%</div>
                        </div>
                    </div>
                    <div className="skillItems">
                        <h6>React</h6>
                        <div class="containerbeta  d-flex align-items-center">
                            <div class="skills react"></div>
                            <div className="per">80%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;