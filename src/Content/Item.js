import React, { useState } from 'react';
import { isEqual } from 'lodash';

export default function Item({
  counterDish,
  setCounterDish,
  counterDrink,
  setCounterDrink,
  counterDessert,
  setCounterDessert,
  category,
  Choice,
  setOrder,
  order
}) {
  const [selectedCard, setSelectedCard] = useState(false);
  const [item, setItem] = useState(0);

  function updateCounter(value) {
    if (category === 'dish') {
      setCounterDish(counterDish + value);
    } else if (category === 'drink') {
      setCounterDrink(counterDrink + value);
    } else {
      setCounterDessert(counterDessert + value);
    }
  }

  function selectACard() {
    if (!selectedCard) {
      setSelectedCard(true);
      updateCounter(1);
      setItem(item + 1);
      setOrder([
        ...order,
        {
          item: Choice.name,
          valor: parseFloat(Choice.price.replace('$', ''))
        }
      ]);
    }
  }

  function removeItem() {
    setItem(item - 1);
    if (item === 1 && category === 'dish') {
      setSelectedCard(false);
      setCounterDish(counterDish - 1);
    }
    if (item === 1 && category === 'drink') {
      setSelectedCard(false);
      setCounterDrink(counterDrink - 1);
    }
    if (item === 1 && category === 'dessert') {
      setSelectedCard(false);
      setCounterDessert(counterDessert - 1);
    }

    let object = {
      item: Choice.name,
      valor: parseFloat(Choice.price.replace('$', ''))
    };

    const index = order.findIndex((i) => isEqual(i, object));
    if (index !== -1) {
      const updatedOrder = [...order];
      updatedOrder.splice(index, 1);
      setOrder(updatedOrder);
    }
  }

  function addItem() {
    setItem(item + 1);
    setOrder([
      ...order,
      {
        item: Choice.name,
        valor: parseFloat(Choice.price.replace('$', ''))
      }
    ]);
  }

  return (
    <div
      className={`card ${selectedCard ? 'selected' : ''}`}
      onClick={selectACard}
    >
      <img src={Choice.image} alt={Choice.name} className='img' />
      <div className='card-description'>
        <h1>{Choice.name}</h1>
        <h2>{Choice.description}</h2>
        <h3>{Choice.price}</h3>
      </div>
      <div className={`counter ${selectedCard ? '' : 'counter-hidden'}`}>
        <div className='minus' onClick={() => removeItem()}>
          -
        </div>
        <div className='quantity'>{item}</div>
        <div className='plus' onClick={() => addItem()}>
          +
        </div>
      </div>
    </div>
  );
}
