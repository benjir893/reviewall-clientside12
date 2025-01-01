import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Categories from './Categories/Categories';
import PopularMenu from './PopularMenu/PopularMenu';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BisstroBoss|Home</title>
            </Helmet>
            {/* <NavBar></NavBar> */}
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;