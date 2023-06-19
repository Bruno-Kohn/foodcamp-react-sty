import DishContent from './DishContent';
import DrinkContent from './DrinkContent';
import DessertContent from './DessertContent';
import items from './items.json';
import React from 'react';

export default function ItemOption() {
  const [counterDish, setCounterDish] = React.useState(0);
  const [counterDrink, setCounterDrink] = React.useState(0);
  const [counterDessert, setCounterDessert] = React.useState(0);
  const [dish, drink, dessert] = items;

  console.log(counterDish, 'counterDish');
  console.log(counterDrink, 'counterDrink');
  console.log(counterDessert, 'counterDessert');

  return (
    <>
      <DishContent
        content={dish}
        counterDish={counterDish}
        setCounterDish={setCounterDish}
      />
      <DrinkContent
        content={drink}
        counterDrink={counterDrink}
        setCounterDrink={setCounterDrink}
      />
      <DessertContent
        content={dessert}
        counterDessert={counterDessert}
        setCounterDessert={setCounterDessert}
      />
    </>
  );
}
