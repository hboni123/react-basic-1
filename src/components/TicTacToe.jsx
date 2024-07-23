import React, { useState } from 'react';

const TicTacToe = ({ isWinnerFound, setIsWinnerFound, currentUser, setCurrentUser }) => {
  const [matrix, setMatrix] = useState([["","",""],["","",""],["","",""]]);

  //changing cell to click the cell
  const onCellClick = (row, col) => {
    if (matrix[row][col] === "" && !isWinnerFound) {
      let matrixCopy = matrix.map((row) => row.slice());
      matrixCopy[row][col] = currentUser;
      setMatrix(matrixCopy);

      if (findWinner(matrixCopy, currentUser)) { //check if winner is found 
        setIsWinnerFound(true);
        //alert(`Player ${currentUser} wins!`);
      } else {
        setCurrentUser(currentUser === 'x' ? 'o' : 'x');
      }
    }
  };

  const findWinner = (mat, user) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (mat[i][0] === user && mat[i][1] === user && mat[i][2] === user) {
        return true;
      }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (mat[0][i] === user && mat[1][i] === user && mat[2][i] === user) {
        return true;
      }
    }
    // Check diagonal
    if (mat[0][0] === user && mat[1][1] === user && mat[2][2] === user) {
      return true;
    }
    if (mat[0][2] === user && mat[1][1] === user && mat[2][0] === user) {
      return true;
    }
    return false;
  };

  //rendering cell to make it clickable
  const renderCell = (row, col) => {
    return (
      <td onClick={() => onCellClick(row, col)}>
        {matrix[row][col]}
      </td>
    );
  };

  return (
    <>

      <table style={{ borderCollapse: 'collapse', margin: '20px auto' }}>
        <tbody>
          <tr>
            {renderCell(0, 0)}
            {renderCell(0, 1)}
            {renderCell(0, 2)}
          </tr>
          <tr>
            {renderCell(1, 0)}
            {renderCell(1, 1)}
            {renderCell(1, 2)}
          </tr>
          <tr>
            {renderCell(2, 0)}
            {renderCell(2, 1)}
            {renderCell(2, 2)}
          </tr>
        </tbody>
      </table>
      
    </>
  );
};

export default TicTacToe;
