import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import About from '../About/About/About';
import Services from '../../Services/Services';
import Contract from '../../Contract/Contract';
import Footer from '../../Footer/Footer';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div id="home">
            <Navbar />
            <HeaderMain />
            <About />
            <Services />
            <Blog />
            <Contract />
            <Footer />
        </div>
    );
};

export default Home;