import Item from './Item';
import React from 'react';

export default function DishContent(props) {
  const { counterDish, setCounterDish } = props;

  return (
    <div className='item-option'>
      <div className='item-option-description'>
        <h1>{props.content.optionDescription}</h1>
      </div>
      <div className='items-card'>
        {props.content.item.map((j) => (
          <Item
            Choice={j}
            counterDish={counterDish}
            setCounterDish={setCounterDish}
            category='dish'
          />
        ))}
      </div>
    </div>
  );
}
