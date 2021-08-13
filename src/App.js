import React, { useState, useEffect } from 'react';
import Header from './components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Build from './components/build';
import Checkout from './components/checkout';

function App() {
  const [toppings, setToppings] = useState({
    cheese: false,
    olive: false,
    pineapple: false,
    mushroom: false,
    tomato: false,
    greenPepper: false,
    ham: false,
    bacon: false,
    pepperoni: false,
    sausage: false
  });

  const resetToppings = () => {
    setToppings({
      cheese: false,
      olive: false,
      pineapple: false,
      mushroom: false,
      tomato: false,
      greenPepper: false,
      ham: false,
      bacon: false,
      pepperoni: false,
      sausage: false
    });
    localStorage.clear();
  };

  useEffect(() => {
    // load toppings saved from local storage
    const data = localStorage.getItem("toppings");
    if (data)
      setToppings(JSON.parse(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
            <Route exact path="/">
              <Build
                toppings={toppings}
                setToppings={setToppings}
                resetToppings={resetToppings}
              />
            </Route>
            <Route path="/checkout">
              <Checkout toppings={toppings} />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
