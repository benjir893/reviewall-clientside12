import React from 'react';
import FoodCard from './FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid md: grid-cols-2 gap-2">
            {
                items.map(item =><FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;