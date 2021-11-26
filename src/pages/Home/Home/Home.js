import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import DroneInformation from '../DroneInformation/DroneInformation';
import Introduction from '../Introduction/Introduction';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Introduction></Introduction>
            <Products></Products>
            <DroneInformation></DroneInformation>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;