import React, { useState } from 'react';
import { SharedButton, say } from '@backoffice/common';
import { Typography } from 'antd';

const { Text } = Typography;

const SpecificFirstAppComponent = () => {
  const [showMessage, toggleShowMessage] = useState(false);
  return (
    <section>
      <h1>Specific App 1 Component</h1>
      <hr />
      <Text>Toggle message for App 1</Text>
      <br />
      <SharedButton onClickHandler={() => toggleShowMessage(!showMessage)}>Shared Button imported in App 1</SharedButton>
      <hr />
      {showMessage && say('Button clicked : Message from App 1 ')}
    </section>
  );
}

export default SpecificFirstAppComponent;