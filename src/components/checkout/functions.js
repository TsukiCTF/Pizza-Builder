import React from 'react';
import {useHistory} from 'react-router-dom';

function Functions({setOrderComplete}) {
  let history = useHistory();

  return (
    <div className="checkout-functions">
      <button className="checkout-goback" onClick={() => history.push("/")}>Back to Customize</button>
      <button className="checkout-submit" onClick={() => setOrderComplete(true) }>Place Order</button>
    </div>
  );
};

export default Functions;
