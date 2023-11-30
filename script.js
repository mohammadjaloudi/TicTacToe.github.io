document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resultDisplay = document.getElementById('result');
    const restartBtn = document.getElementById('restartBtn');
  
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
    const checkWinner = () => {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return gameBoard[a];
        }
      }
      
      return null;
    };
  
    const checkTie = () => {
      return gameBoard.every((cell) => cell !== '');
    };
  
    const handleClick = (index) => {
      if (!gameBoard[index] && gameActive) {
        gameBoard[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        
        const winner = checkWinner();
        if (winner) {
          resultDisplay.innerText = `${winner} wins!`;
          gameActive = false;
        } else if (checkTie()) {
          resultDisplay.innerText = 'It\'s a tie!';
          gameActive = false;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    };
  
    const restartGame = () => {
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      cells.forEach((cell) => (cell.innerText = ''));
      resultDisplay.innerText = '';
      gameActive = true;
      currentPlayer = 'X';
    };
  
    cells.forEach((cell, index) => {
      cell.addEventListener('click', () => handleClick(index));
    });
  
    restartBtn.addEventListener('click', restartGame);
  });  