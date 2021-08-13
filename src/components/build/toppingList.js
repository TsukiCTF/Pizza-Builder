import React from 'react';

function ToppingList({updateToppings}) {
  return (
    <div className="list-container" >
      <div className="list-description">Toppings are charged at $1.25 each</div>
      <div className="list">
        <button className="list-item" onClick={() => updateToppings("cheese")}>Cheese</button>
        <button className="list-item" onClick={() => updateToppings("pepperoni")}>Pepperoni</button>
        <button className="list-item" onClick={() => updateToppings("olive")}>Olive</button>
        <button className="list-item" onClick={() => updateToppings("pineapple")}>Pineapple</button>
        <button className="list-item" onClick={() => updateToppings("mushroom")}>Mushroom</button>
        <button className="list-item" onClick={() => updateToppings("greenPepper")}>Green Pepper</button>
        <button className="list-item" onClick={() => updateToppings("ham")}>Ham</button>
        <button className="list-item" onClick={() => updateToppings("bacon")}>Bacon</button>
        <button className="list-item" onClick={() => updateToppings("sausage")}>Sausage</button>
        <button className="list-item" onClick={() => updateToppings("tomato")}>Tomato</button>
      </div>
    </div>
  );
};

export default ToppingList;
