import React from 'react'

const Winner = ({ isWinnerFound, currentUser }) => {

  //function to find winner
  const win = (isWinnerFound) => {
    if (isWinnerFound){
      if(currentUser === 'x'){
        return "Player 1"
      }else{
        return "Player 2"
      }
    }else{
      return "NO ONE"
    }
  }
  return (
    <>
        <h1>
          Winner is {win(isWinnerFound)}     
        </h1>
    </>
  )
}

export default Winner