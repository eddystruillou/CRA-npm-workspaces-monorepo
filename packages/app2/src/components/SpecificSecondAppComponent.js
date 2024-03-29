import React, { useState } from 'react';
import { SharedButton, say } from '@backoffice/common';
import { Typography } from 'antd';

const { Text } = Typography;

const SpecificSecondAppComponent = () => {
  const [showMessage, toggleShowMessage] = useState(false);

  return (
    <section>
      <h1>Specific App 2 Component</h1>
      <hr />
        <Text>Toggle message for App 2</Text>
        <br />
        <SharedButton buttonType={"primary"} onClickHandler={() => toggleShowMessage(!showMessage)}>Shared Button imported in App 2</SharedButton>
      <hr />
      {showMessage && say('Button clicked : Message from App 2 ')}
    </section>
  );
}

export default SpecificSecondAppComponent;