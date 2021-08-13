import React, {useState} from 'react';
import AddedToppings from './addedToppings';
import OrderComplete from './orderComplete';
import TotalCost from './totalCost';
import Functions from './functions';

function Checkout({toppings}) {
  const [orderComplete, setOrderComplete] = useState(false);

  return (
    <div className="checkout-page">
      { !orderComplete && (
        <div>
          <h1 className="checkout-h1"> Order details</h1>
          <div className="checkout-topping-container">
            <h2 className="checkout-h2">Toppings Added:</h2>
            <AddedToppings toppings={toppings} />
          </div>
          <TotalCost toppings={toppings} />
          <Functions setOrderComplete={setOrderComplete} />
        </div>)
      }
      { orderComplete && (<OrderComplete />) }
    </div>
  );
};

export default Checkout;