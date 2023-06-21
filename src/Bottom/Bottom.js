export default function Bottom({ enableButton, order }) {
  function sendToWhatsapp(order) {
    let arr = [];
    for (let i = 0; i < order.length; i++) {
      arr.push([`${order[i].item} || ${order[i].valor}`]);
    }
    const countMap = {};

    arr.forEach((i) => {
      if (countMap[i]) {
        countMap[i] += 1;
      } else {
        countMap[i] = 1;
      }
    });

    let myEncodedOrder = '';
    let total = 0;

    for (const product in countMap) {
      const [name, price] = product.split(' || ');
      const quantity = countMap[product];
      const totalPrice = parseFloat(price) * quantity;
      total += totalPrice;

      myEncodedOrder += `${name} (${quantity}x) - $${totalPrice.toFixed(2)}\n`;
    }

    myEncodedOrder = `\n${myEncodedOrder}Total: $${total.toFixed(2)}`;

    return encodeURIComponent(myEncodedOrder);
  }
  return (
    <div className='bottom'>
      <a
        href={`https://wa.me/5521981037125/?text=${sendToWhatsapp(order)}`}
        className={enableButton ? 'button-enabled' : 'button-disabled'}
        onClick={enableButton ? () => sendToWhatsapp(order) : () => {}}
      >
        {enableButton
          ? 'Place an order'
          : 'Select the 3 items to close the order'}
      </a>
    </div>
  );
}
