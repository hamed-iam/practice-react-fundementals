import { useContext } from 'react';
import { CountContext } from '../../App';

const ComponentF = () => {
  const { countState, countDispatch } = useContext(CountContext);

  return (
    <main>
      <h3>Component F</h3>
      <div>{countState}</div>

      <button onClick={() => countDispatch({ type: 'INCREMENT', payload: 1 })}>
        +
      </button>
      <button onClick={() => countDispatch({ type: 'RESET' })}>reset</button>
      <button onClick={() => countDispatch({ type: 'DECREMENT', payload: 1 })}>
        -
      </button>
    </main>
  );
};

export default ComponentF;
