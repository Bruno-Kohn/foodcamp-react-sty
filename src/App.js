import Top from './Top/Top';
import Content from './Content/Content';
import Bottom from './Bottom/Bottom';
import React from 'react';

function App() {
  const [enableButton, setEnableButton] = React.useState(false);
  const [order, setOrder] = React.useState([]);
  return (
    <>
      <Top />
      <Content
        enableButton={enableButton}
        setEnableButton={setEnableButton}
        order={order}
        setOrder={setOrder}
      />
      <Bottom enableButton={enableButton} order={order} />
    </>
  );
}

export default App;
