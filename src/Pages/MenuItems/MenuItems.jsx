import React from "react";

const MenuItems = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div>
      <div className="flex flex-row gap-3 my-4">
        <img
          className="w-20 h-20 rounded-tr-full rounded-br-full rounded-bl-full"
          src={image}
          alt=""
        />
        <div className="">
          <div className="flex flex-row gap-4">
            <div className="">
              <h1 className="font-semibold">{name}</h1>
              <p>{recipe}</p>

            </div>
            <p className="text-orange-600">price : {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
