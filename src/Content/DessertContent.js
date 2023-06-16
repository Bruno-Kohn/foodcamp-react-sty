import Item from './Item';

export default function DessertContent(props) {
  console.log(props.content, 'props.content');

  return (
    <div className='item-option'>
      <div className='item-option-description'>
        <h1>{props.content.optionDescription}</h1>
      </div>
      <div className='items-card'>
        {props.content.item.map((j) => (
          <Item Choice={j} />
        ))}
      </div>
    </div>
  );
}
