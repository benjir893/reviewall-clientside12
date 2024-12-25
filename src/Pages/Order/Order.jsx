import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../OurMenu/Cover";
import MapingComponent from "../HomePageCompos/PopularMenu/MapingComponent";
import image from "../../assets/shop/banner2.jpg";
import useMenu from "../../Hooks/useMenu";
import NavBar from "../../Shared/NavBar/NavBar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "./FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "soup", "pizza", "dessert", "drinks", "offered"];
  const { catagory } = useParams();
  const initialIndex = categories.indexOf(catagory);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const saladItem = menu.filter((item) => item.category === "salad");
  const soupItem = menu.filter((item) => item.category === "soup");
  const pizzaItem = menu.filter((item) => item.category === "pizza");
  const dessertItem = menu.filter((item) => item.category === "dessert");
  const drinksItem = menu.filter((item) => item.category === "drinks");
  const popular = menu.filter(item => item.category==='popular')
  const offeredItem = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Benjir|Order</title>
      </Helmet>
      <NavBar></NavBar>
      <Cover
        img={image}
        title={"Ready to Order"}
        subtitle={"Discover the wonders of taste"}
      ></Cover>
      {/* <MapingComponent items={menu}></MapingComponent> */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>SOUP</Tab>
          <Tab>PIZZA</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
          <Tab>POPULAR</Tab>
          <Tab>TODAY'S OFFERED</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md: grid-cols-2 gap-2">
            {saladItem.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* we also can call the OrderTab like this  */}
          <OrderTab items={soupItem}></OrderTab>
          {/* <div className="grid md: grid-cols-2 gap-2">
            {soupItem.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzaItem}></OrderTab>
          {/* <div className="grid md: grid-cols-2 gap-2">
            {pizzaItem.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
        </TabPanel>
        <TabPanel>
            <OrderTab items={dessertItem}></OrderTab>
          {/* <div className="grid md: grid-cols-2 gap-2">
            {dessertItem.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinksItem}></OrderTab>
          {/* <div className="grid md: grid-cols-2 gap-2">
            {drinksItem.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
        </TabPanel>
        <TabPanel>
            <OrderTab items={popular}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={offeredItem}></OrderTab>
          {/* <div className="grid md: grid-cols-2 gap-2">
            {offeredItem.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
