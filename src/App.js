import './App.css';
import Chance from './components/chance';
import TicTacToe from './components/TicTacToe';
import Winner from './components/Winner';

function App() {
  return (
    <>
      <Chance/>
      <TicTacToe />
      <Winner/>
    </>
  );
}

export default App;
