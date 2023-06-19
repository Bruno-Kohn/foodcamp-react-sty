import Item from './Item';
import React from 'react';

export default function DessertContent(props) {
  const { counterDessert, setCounterDessert } = props;

  return (
    <div className='item-option'>
      <div className='item-option-description'>
        <h1>{props.content.optionDescription}</h1>
      </div>
      <div className='items-card'>
        {props.content.item.map((j) => (
          <Item
            Choice={j}
            counterDessert={counterDessert}
            setCounterDessert={setCounterDessert}
            category='dessert'
          />
        ))}
      </div>
    </div>
  );
}
