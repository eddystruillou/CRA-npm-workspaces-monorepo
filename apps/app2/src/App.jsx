import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add } from '@eddy/math-helpers'
import { Foo, DangerButton } from '@eddy/backoffice-components'
import { SharedButton, say } from '@eddy/common';

function App() {
  const [count, setCount] = useState(0);
  const [showMessage, toggleShowMessage] = useState(false);

  useEffect(() => {
    console.log(add(1, 2));
  }, []);

  return (
    <>
      <div>
        <Foo />
        <hr />
        <DangerButton />
        <hr />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>App 2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <SharedButton buttonType="primary" onClickHandler={() => toggleShowMessage(!showMessage)}>Shared Button imported in App 2</SharedButton>
      <hr />
      {showMessage && say('Button clicked : Message from App 2 ')}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
