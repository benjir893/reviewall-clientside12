import React from "react";
import MenuItems from "../../MenuItems/MenuItems";
import Subtitle from "../../OurMenu/Subtitle";
import { Link } from "react-router-dom";

const MapingComponent = ({ items }) => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-2">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="ml-32">
        <Link to={`/order/${items}`}>
          <button className="mx-96 border border-b-4 border-solid p-2 rounded-lg font-semibold font-parkinsans ">
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MapingComponent;
