import React from 'react';

export default function Item(props) {
  const [selectedCard, setSelectedCard] = React.useState(false);

  function selectACard() {
    if (
      (!props.isSelected && !selectedCard) ||
      (props.isSelected && selectedCard)
    ) {
      setSelectedCard(!selectedCard);
      props.setIsSelected(!props.isSelected);
    }
  }

  return (
    <div
      className={`card ${selectedCard ? 'selected' : ' '}`}
      onClick={() => selectACard()}
    >
      <img src={props.Choice.image} alt={props.Choice.name} className='img' />
      <div className='card-description'>
        <h1>{props.Choice.name}</h1>
        <h2>{props.Choice.description}</h2>
        <h3>{props.Choice.price}</h3>
      </div>
      <div className='counter'> - 1 + </div>
    </div>
  );
}
