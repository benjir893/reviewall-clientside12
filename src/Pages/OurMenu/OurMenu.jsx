import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Cover from './Cover';
import coverpic from '../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import Subtitle from './Subtitle';
import useMenu from '../../Hooks/useMenu';
import MapingComponent from '../HomePageCompos/PopularMenu/MapingComponent';

const OurMenu = () => {
    const[menu] =useMenu()
    return (
        <div>
            <Helmet>
                <title>Benjir|OurMenu</title>
            </Helmet>
            <NavBar></NavBar>
            <Cover img={coverpic} title={"our menu"} subtitle={"venture the world of Taste"}></Cover>
            <Subtitle title={"popular menu for today"} subtitle={"Discover the taste of wonders"}></Subtitle>
            <MapingComponent items={menu}></MapingComponent>



        </div>
    );
};

export default OurMenu;