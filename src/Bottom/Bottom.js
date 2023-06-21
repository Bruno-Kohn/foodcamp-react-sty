export default function Bottom({ enableButton, order }) {
  function sendToWhatsapp(order) {
    const orderSummary = generateOrderSummary(order);
    const encodedOrder = encodeURIComponent(orderSummary);
    return encodedOrder;
  }

  function generateOrderSummary(order) {
    const countMap = countOrderItems(order);
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
    return myEncodedOrder;
  }

  function countOrderItems(order) {
    const countMap = {};

    for (let i = 0; i < order.length; i++) {
      const item = order[i];
      const itemKey = `${item.item} || ${item.valor}`;

      if (countMap[itemKey]) {
        countMap[itemKey] += 1;
      } else {
        countMap[itemKey] = 1;
      }
    }

    return countMap;
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
