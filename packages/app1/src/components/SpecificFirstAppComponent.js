import React, { useState } from 'react';
import { Button } from '@backoffice/common';

const SpecificFirstAppComponent = () => {
  const [showMessage, toggleShowMessage] = useState(false);
  return (
    <section>
      <h1>Specific App 1 Component</h1>
      <hr />
      Toggle message for App 1
      <br />
      <Button onClickHandler={() => toggleShowMessage(!showMessage)}>Shared Button imported in App 1</Button>
      <hr />
      {showMessage && <p>Message for App 1</p>}
    </section>
  );
}

export default SpecificFirstAppComponent;