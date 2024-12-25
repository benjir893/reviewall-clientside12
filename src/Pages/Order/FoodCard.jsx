import React from "react";

const FoodCard = ({item}) => {
    const { image, name, recipe, category, price } = item;
  return (
    <div className="my-5">
      <div className="card bg-base-100  shadow-xl">
      <p className=" font-semibold absolute ml-96 text-red-500 bg-inherit bg-opacity-5 p-2 rounded-lg">Price: ${price}</p>
        <figure>
          <img className="rounded-lg"
            src={image}
            alt="food"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="">{recipe}</p>
          <p>Category: {category}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
