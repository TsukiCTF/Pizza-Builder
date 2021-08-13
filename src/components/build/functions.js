import React from 'react';
import {useHistory} from 'react-router-dom';

function Functions({resetToppings}) {
  let history = useHistory();
  
  return (
    <div className="functions-container">
      <div className="functions">
        <button className="functions-reset" onClick={() => resetToppings()}>
          Reset Pizza
        </button>
        <button className="functions-checkout" onClick={() => history.push("/checkout")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Functions;
