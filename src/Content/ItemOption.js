export default function ItemOption() {
  const items = [
    {
      optionDescription: 'Primeiro, seu prato',
      item: [
        {
          image: 'Images/bigmac.jpg',
          name: 'Big Mac',
          description: 'hummmmm.. tasty!',
          price: '$4.19'
        },
        {
          image: 'Images/cheddar.jpg',
          name: 'Cheddar McMelt',
          description: 'hummmmm.. tasty!',
          price: '$4.29'
        },
        {
          image: 'Images/cheeseburger.jpg',
          name: 'Cheeseburger',
          description: 'hummmmm.. tasty!',
          price: '$4.39'
        },
        {
          image: 'Images/filet-o-fish.jpg',
          name: 'Filet-O-Fish',
          description: 'hummmmm.. tasty!',
          price: '$4.49'
        },
        {
          image: 'Images/mcchicken.jpg',
          name: 'McChicken',
          description: 'hummmmm.. tasty!',
          price: '$4.59'
        },
        {
          image: 'Images/mcdouble.jpg',
          name: 'McDouble',
          description: 'hummmmm.. tasty!',
          price: '$4.69'
        },
        {
          image: 'Images/mccrispy.jpg',
          name: 'McCrispy',
          description: 'hummmmm.. tasty!',
          price: '$4.79'
        }
      ]
    },
    {
      optionDescription: 'Agora, sua bebida',
      item: [
        {
          image: 'Images/coca.jpg',
          name: 'Coke',
          description: 'hummmmm.. tasty!',
          price: '$1.19'
        },
        {
          image: 'Images/dr-pepper.jpg',
          name: 'Dr. Pepper',
          description: 'hummmmm.. tasty!',
          price: '$1.29'
        },
        {
          image: 'Images/guarana.jpg',
          name: 'Guarana',
          description: 'hummmmm.. tasty!',
          price: '$1.39'
        },
        {
          image: 'Images/hot-chocolate.jpg',
          name: 'Hot Chocolate',
          description: 'hummmmm.. tasty!',
          price: '$1.49'
        },
        {
          image: 'Images/lemonade.jpg',
          name: 'Lemonade',
          description: 'hummmmm.. tasty!',
          price: '$1.59'
        },
        {
          image: 'Images/sprite.jpg',
          name: 'Sprite',
          description: 'hummmmm.. tasty!',
          price: '$1.69'
        },
        {
          image: 'Images/sweet-tea.jpg',
          name: 'Sweet Tea',
          description: 'hummmmm.. tasty!',
          price: '$1.79'
        }
      ]
    },
    {
      optionDescription: 'Por fim, sua sobremesa',
      item: [
        {
          image: 'Images/casquinha.jpg',
          name: 'Vanilla Cone',
          description: 'hummmmm.. tasty!',
          price: '$1.19'
        },
        {
          image: 'Images/apple-fritter.jpg',
          name: 'Apple Fritter',
          description: 'hummmmm.. tasty!',
          price: '$1.29'
        },
        {
          image: 'Images/blueberry-muffin.jpg',
          name: 'Blueberry Muffin',
          description: 'hummmmm.. tasty!',
          price: '$1.39'
        },
        {
          image: 'Images/mcflurry.jpg',
          name: 'McFlurry',
          description: 'hummmmm.. tasty!',
          price: '$1.49'
        },
        {
          image: 'Images/strawberry-shake.jpg',
          name: 'Strawberry Shake',
          description: 'hummmmm.. tasty!',
          price: '$1.59'
        },
        {
          image: 'Images/sundae.jpg',
          name: 'Sundae',
          description: 'hummmmm.. tasty!',
          price: '$1.69'
        },
        {
          image: 'Images/vanilla-shake.jpg',
          name: 'Vanilla Shake',
          description: 'hummmmm.. tasty!',
          price: '$1.79'
        }
      ]
    }
  ];

  return (
    <>
      {items.map((i) => (
        <div className='item-option'>
          <div className='item-option-description'>
            <h1>{i.optionDescription}</h1>
          </div>
          <div className='items-card'>
            {i.item.map((j) => (
              <div className='card'>
                <img src={j.image} alt={j.name} className='img' />
                <div className='card-description'>
                  <h1>{j.name}</h1>
                  <h2>{j.description}</h2>
                  <h3>{j.price}</h3>
                </div>
                <div className='counter'> - 1 +</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
