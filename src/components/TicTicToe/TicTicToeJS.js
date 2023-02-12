import "./TicTicToe.css";
const TicTicToe = () => {
  const squares = document.querySelectorAll(".square");
  const board = document.querySelector(".board");
  let currentPlayer = "X";
  let sqaresFilled = squares.length;
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  board.addEventListener("click", function (e) {
    if (e.target.textContent === "" && e.target.classList.contains("square")) {
      e.target.textContent = currentPlayer;
      sqaresFilled--;
      checkForWin();
      checkForTie();
      currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");
    }
  });

  function checkForTie() {
    if (sqaresFilled === 0) {
      alert("match tied");
      resetGame();
    }
  }

  function checkForWin() {
    winningCombinations.forEach((combination) => {
      const [a, b, c] = combination;
      if (
        squares[a].textContent === currentPlayer &&
        squares[b].textContent === currentPlayer &&
        squares[c].textContent === currentPlayer
      ) {
        alert(`match won by ${currentPlayer}`);
        resetGame();
      }
    });
  }

  function resetGame() {
    squares.forEach((square) => (square.textContent = ""));
    currentPlayer = "X";
    sqaresFilled = squares.length;
  }
  return (
    <>
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>

      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>

      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </>
  );
};

export default TicTicToe;
