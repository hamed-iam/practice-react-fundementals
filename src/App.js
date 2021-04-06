import ComponentC from './components/3-Branch/ComponentC';
import ComponentB from './components/2-Branch/ComponentB';
import ComponentA from './components/1-Branch/ComponentA';
import './App.css';
import { useReducer, createContext } from 'react';

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;

    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <div className="child">
          <ComponentA />
        </div>
        <div className="child">
          <ComponentB />
        </div>
        <div className="child">
          <ComponentC />
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;
