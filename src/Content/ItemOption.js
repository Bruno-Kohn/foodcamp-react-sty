import DishContent from './DishContent';
import DrinkContent from './DrinkContent';
import DessertContent from './DessertContent';
import items from './items.json';
import React, { useEffect } from 'react';

export default function ItemOption({ setEnableButton, order, setOrder }) {
  const [counterDish, setCounterDish] = React.useState(0);
  const [counterDrink, setCounterDrink] = React.useState(0);
  const [counterDessert, setCounterDessert] = React.useState(0);
  const [dish, drink, dessert] = items;

  useEffect(() => {
    if (counterDish > 0 && counterDrink > 0 && counterDessert > 0) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [counterDessert, counterDish, counterDrink, setEnableButton]);

  return (
    <>
      <DishContent
        content={dish}
        counterDish={counterDish}
        setCounterDish={setCounterDish}
        order={order}
        setOrder={setOrder}
      />
      <DrinkContent
        content={drink}
        counterDrink={counterDrink}
        setCounterDrink={setCounterDrink}
        order={order}
        setOrder={setOrder}
      />
      <DessertContent
        content={dessert}
        counterDessert={counterDessert}
        setCounterDessert={setCounterDessert}
        order={order}
        setOrder={setOrder}
      />
    </>
  );
}
