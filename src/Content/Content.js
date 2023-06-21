import ItemOption from './ItemOption';

export default function Content({
  enableButton,
  setEnableButton,
  order,
  setOrder
}) {
  return (
    <div className='content'>
      <ItemOption
        enableButton={enableButton}
        setEnableButton={setEnableButton}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
}
