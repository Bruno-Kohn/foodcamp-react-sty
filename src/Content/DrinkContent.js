import Item from './Item';
import React from 'react';

export default function DrinkContent(props) {
  console.log(props.content, 'props.content');
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className='item-option'>
      <div className='item-option-description'>
        <h1>{props.content.optionDescription}</h1>
      </div>
      <div className='items-card'>
        {props.content.item.map((j) => (
          <Item
            Choice={j}
            setIsSelected={setIsSelected}
            isSelected={isSelected}
          />
        ))}
      </div>
    </div>
  );
}
