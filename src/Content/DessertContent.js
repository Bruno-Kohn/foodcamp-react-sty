import Item from './Item';
import React from 'react';

export default function DessertContent({
  counterDessert,
  setCounterDessert,
  content,
  setOrder,
  order
}) {
  return (
    <div className='item-option'>
      <div className='item-option-description'>
        <h1>{content.optionDescription}</h1>
      </div>
      <div className='items-card'>
        {content.item.map((j) => (
          <Item
            Choice={j}
            counterDessert={counterDessert}
            setCounterDessert={setCounterDessert}
            category='dessert'
            setOrder={setOrder}
            order={order}
          />
        ))}
      </div>
    </div>
  );
}
