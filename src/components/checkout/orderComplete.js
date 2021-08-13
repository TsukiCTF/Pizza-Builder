import React from 'react';

function OrderComplete() {

  const backToBuild = () => {
    localStorage.clear();
    window.location.href = "/";  
  };

  return (
    <div>
      <h1 className="checkout-h1">Order Confirmed</h1>
      <p className="checkout-p">Your pizza will be ready in 15 minutes.</p>
      <button className="checkout-goback" onClick={() => backToBuild()}>Create a New Pizza</button>
    </div>
  );
};

export default OrderComplete;
