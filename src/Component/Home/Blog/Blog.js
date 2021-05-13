import React from 'react';
import blogImg1 from '../../../Image/blog-img1.jpg'
import blogImg2 from '../../../Image/blog-img2.jpg'
import blogImg3 from '../../../Image/blog-img3.jpg'
import './Blog.scss'
const Blog = () => {
    return (
        <div className="container mt-5 mb-5" id="blogs">
            <div className="container">
                <div className="text-center title  mb-5 mt-5">
                    <p>What I am thinking</p>
                    <h3>LATEST BLOG</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div data-aos="fade-up">
                        <div class="card">
                            <div className="blogImg">
                                <img src={blogImg1} alt="" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Continually reinvent
                                                competitive</h5>
                                <p class="card-text">Rapidiously aggregate client-focused strategic theme areas after
                                high-quality data. Continually aggregate diverse ideas and error-free
                                                bandwidth. </p>
                                <a href="#" class="btn btn-primary blogBtn">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div data-aos="fade-up">
                        <div class="card">
                            <div className="blogImg">
                                <img src={blogImg2} alt="" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Continually reinvent
                                                competitive</h5>
                                <p class="card-text">Rapidiously aggregate client-focused strategic theme areas after
                                high-quality data. Continually aggregate diverse ideas and error-free
                                                bandwidth. </p>
                                <a href="#" class="btn btn-primary blogBtn">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div data-aos="fade-up">
                            <div class="card">
                                <div className="blogImg">
                                    <img src={blogImg3} alt="" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Continually reinvent
                                                    competitive</h5>
                                    <p class="card-text">Rapidiously aggregate client-focused strategic theme areas after
                                    high-quality data. Continually aggregate diverse ideas and error-free
                                                    bandwidth. </p>
                                    <a href="#" class="btn btn-primary blogBtn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;