import './App.css';
import Chance from './components/chance';
import TicTacToe from './components/TicTacToe';
import Winner from './components/Winner';
import React, { useState } from 'react';


function App() {
  const [isWinnerFound, setIsWinnerFound] = useState(false);
  const [currentUser, setCurrentUser] = useState('x');

  return (
    <>
      <Chance currentUser = {currentUser}/>
      <TicTacToe isWinnerFound = {isWinnerFound} setIsWinnerFound = {setIsWinnerFound}
        currentUser = {currentUser} setCurrentUser = {setCurrentUser}  />
      <Winner isWinnerFound = {isWinnerFound} currentUser = {currentUser} />
    </>
  );
}

export default App;
