import React from 'react';

export default function Item(props) {
  const {
    counterDish,
    setCounterDish,
    counterDrink,
    setCounterDrink,
    counterDessert,
    setCounterDessert,
    category
  } = props;
  const [selectedCard, setSelectedCard] = React.useState(false);

  function selectACard(category) {
    setSelectedCard(!selectedCard);
    if (category === 'dish') {
      if (!selectedCard) {
        setCounterDish(counterDish + 1);
      } else {
        setCounterDish(counterDish - 1);
      }
    } else if (category === 'drink') {
      if (!selectedCard) {
        setCounterDrink(counterDrink + 1);
      } else {
        setCounterDrink(counterDrink - 1);
      }
    } else {
      if (!selectedCard) {
        setCounterDessert(counterDessert + 1);
      } else {
        setCounterDessert(counterDessert - 1);
      }
    }
  }

  return (
    <div
      className={`card ${selectedCard ? 'selected' : ' '}`}
      onClick={() => selectACard(category)}
    >
      <img src={props.Choice.image} alt={props.Choice.name} className='img' />
      <div className='card-description'>
        <h1>{props.Choice.name}</h1>
        <h2>{props.Choice.description}</h2>
        <h3>{props.Choice.price}</h3>
      </div>
      <div className={`${selectedCard ? 'counter' : 'counter-hidden'}`}>
        {' '}
        - 1 +{' '}
      </div>
    </div>
  );
}
