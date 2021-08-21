import React from 'react';

function TotalCost({toppings}) {
  const calculateTotal = () => {
    let total = 5; // base cost
    Object.keys(toppings).forEach(item => {
      total += toppings[item] * 0.75;
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
