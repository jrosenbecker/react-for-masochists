import './App.scss';
import { Counter } from './Counter';
import { RandomWords } from './RandomWords/RandomWords';

function App() {
  return (
    <div className="App flex flex-col flex-big-gap m32 align-center justify-center p4">
      <Counter></Counter>

      <RandomWords></RandomWords>
    </div>
  );
}

export default App;
