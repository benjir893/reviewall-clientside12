import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import MenuItems from "../../MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";
import MapingComponent from "./MapingComponent";
import Subtitle from "../../OurMenu/Subtitle";

const PopularMenu = () => {
  const [menu] = useMenu();
  const saladItem = menu.filter((item) => item.category === "salad");
  const soupItem = menu.filter((item) => item.category === "soup");
  const pizzaItem = menu.filter((item) => item.category === "pizza");
  const dessertItem = menu.filter((item) => item.category === "dessert");
  const drinksItem = menu.filter((item) => item.category === "drinks");
  const popular = menu.filter(item => item.category==='popular')
  const offeredItem = menu.filter((item) => item.category === "offered");
 
  // useEffect(()=>{
  //     fetch('menu.json')
  //     .then(res =>res.json())
  //     .then(data =>{
  //         const popularItems = data.filter(item =>item.category === 'popular');
  //         setMenu(popularItems)
  //     })
  // },[])
  return (
    <div>
         <div className=" my-3">
        <Subtitle
          title={"salad menu"}
          subtitle={"discover the world of taste"}
        ></Subtitle>
        <MapingComponent items={saladItem}></MapingComponent>
      </div>
         <div className=" my-3">
        <Subtitle
          title={"soup menu"}
          subtitle={"discover the world of taste"}
        ></Subtitle>
        <MapingComponent items={soupItem}></MapingComponent>
      </div>
         <div className=" my-3">
        <Subtitle
          title={"pizza menu"}
          subtitle={"discover the world of taste"}
        ></Subtitle>
        <MapingComponent items={pizzaItem}></MapingComponent>
      </div>
      <div className=" my-3">
        <Subtitle
          title={"dessert menu"}
          subtitle={"discover the world of taste"}
        ></Subtitle>
        <MapingComponent items={dessertItem}></MapingComponent>
      </div>
         <div className=" my-3">
        <Subtitle
          title={"drinks menu"}
          subtitle={"discover the world of taste"}
        ></Subtitle>
        <MapingComponent items={drinksItem}></MapingComponent>
      </div>
      <div className=" my-3">
        <Subtitle
          title={"popular menu"}
          subtitle={"discover the world of taste"}
        ></Subtitle>
        <MapingComponent items={popular}></MapingComponent>
      </div>
      <div className=" my-3">
        <Subtitle
          title={"offered menu"}
          subtitle={"discover the world of taste"}
        ></Subtitle>
        <MapingComponent items={offeredItem}></MapingComponent>
     
      </div>
      
    </div>
  );
};

export default PopularMenu;
