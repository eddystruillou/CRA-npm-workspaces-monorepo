import React, { useEffect, useState } from 'react';
import { SharedButton, say } from '@backoffice/common';
import { Typography } from 'antd';
import { add } from 'math-helpers';
import { Foo, DangerButton } from 'backoffice-components';

const { Text } = Typography;

const SpecificFirstAppComponent = () => {
  const [showMessage, toggleShowMessage] = useState(false);

  useEffect(() => {
    console.log(add(1, 2));
  }, []);

  return (
    <section>
      <Foo />
      <h1>Specific App 1 Component</h1>
      <hr />
      <Text>Toggle message for App 1</Text>
      <br />
      <DangerButton />
      <SharedButton onClickHandler={() => toggleShowMessage(!showMessage)}>Shared Button imported in App 1</SharedButton>
      <hr />
      {showMessage && say('Button clicked : Message from App 1 ')}
    </section>
  );
}

export default SpecificFirstAppComponent;