import React, { useState } from 'react';
import { Button, say } from '@backoffice/common';

const SpecificSecondAppComponent = () => {
  const [showMessage, toggleShowMessage] = useState(false);

  return (
    <section>
      <h1>Specific App 2 Component</h1>
      <hr />
        Toggle message for App 2
        <br />
        <Button onClickHandler={() => toggleShowMessage(!showMessage)}>Shared Button imported in App 2</Button>
      <hr />
      {showMessage && say('Button clicked : Message from App 2 ')}
    </section>
  );
}

export default SpecificSecondAppComponent;