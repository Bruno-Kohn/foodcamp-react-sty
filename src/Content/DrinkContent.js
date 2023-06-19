import Item from './Item';
import React from 'react';

export default function DrinkContent(props) {
  const { counterDrink, setCounterDrink } = props;

  return (
    <div className='item-option'>
      <div className='item-option-description'>
        <h1>{props.content.optionDescription}</h1>
      </div>
      <div className='items-card'>
        {props.content.item.map((j) => (
          <Item
            Choice={j}
            counterDrink={counterDrink}
            setCounterDrink={setCounterDrink}
            category='drink'
          />
        ))}
      </div>
    </div>
  );
}
