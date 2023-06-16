import DishContent from './DishContent';
import DrinkContent from './DrinkContent';
import DessertContent from './DessertContent';
import items from './items.json';

export default function ItemOption() {
  const [dish, drink, dessert] = items;

  return (
    <>
      <DishContent content={dish} />
      <DrinkContent content={drink} />
      <DessertContent content={dessert} />
    </>
  );
}
