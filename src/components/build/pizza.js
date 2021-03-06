import React from 'react';
import Cheese from "../../assets/Cheese.png";
import Crust from "../../assets/Crust.png";
import Olive from "../../assets/Olive.png";
import Pineapple from "../../assets/Pineapple.png";
import Mushroom from "../../assets/Mushroom.png";
import Tomato from "../../assets/Tomato.png";
import GreenPepper from "../../assets/GreenPepper.png";
import Ham from "../../assets/Ham.png";
import Bacon from "../../assets/Bacon.png";
import Pepperoni from "../../assets/Pepperoni.png";
import Sausage from "../../assets/Sausage.png";
import {motion} from "framer-motion";

function Pizza({toppings}) {
  return (
    <div className="pizza-container">
        <div className="pizza" >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["cheese"] ? 100: -100, opacity: toppings["cheese"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Cheese} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["pepperoni"] ? 100: -100, opacity: toppings["pepperoni"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Pepperoni} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["olive"] ? 100: -100, opacity: toppings["olive"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Olive} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["pineapple"] ? 100: -100, opacity: toppings["pineapple"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Pineapple} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["mushroom"] ? 100: -100, opacity: toppings["mushroom"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Mushroom} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["greenPepper"] ? 100: -100, opacity: toppings["greenPepper"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={GreenPepper} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["ham"] ? 100: -100, opacity: toppings["ham"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Ham} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["bacon"] ? 100: -100, opacity: toppings["bacon"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Bacon} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["sausage"] ? 100: -100, opacity: toppings["sausage"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Sausage} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["tomato"] ? 100: -100, opacity: toppings["tomato"] ? 1 : 0}}
            transition={{ duration: 0.3 }}
            className="pizza-topping"
          >
            <img src={Tomato} alt="img" className="pizza-topping-img" />
          </motion.div>
          <img src={Crust} alt="img" className="pizza-topping-img" />
        </div>
      </div>
  );
};

export default Pizza;