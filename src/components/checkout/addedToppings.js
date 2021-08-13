import React from 'react';

function AddedToppings({toppings}) {

  return Object.keys(toppings).map((item, index) => {
    if (toppings[item]) {
      return (
        <div className="checkout-topping">
          {item[0].toUpperCase() + item.substr(1)}
        </div>
      );
    }
    return <div></div>;
  });
};

export default AddedToppings;
