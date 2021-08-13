import React from 'react';

function TotalCost({toppings}) {
  const calculateTotal = () => {
    let total = 10; // base cost
    Object.keys(toppings).forEach(item => {
      total += toppings[item] * 1.25;
    });
    return total;
  };

  return (
    <div className="checkout-total">
      Total: ${calculateTotal().toFixed(2)}
    </div>
  );
};

export default TotalCost;
