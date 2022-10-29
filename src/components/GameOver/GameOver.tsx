import Button from "../Button/Button";
import { randomColor } from "../listOfColors/listOfColors";
import { randomShape } from "../listOfShapes/listOfShapes";
import "./GameOver.css";

export default function GameOver({
  setGameOver,
  setBoard,
  setCurrShapePos,
  setCurrColor,
  setBottomBorder,
}: any) {
  function resetGame() {
    setBottomBorder([90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);

    setBoard([...Array(100).fill({ color: "", squareTaken: false })]);
    setCurrShapePos(randomShape());
    setCurrColor(randomColor());
    setGameOver(false);
  }

  return (
    <div className="GameOver">
      <Button text="Game Over" handleClick={resetGame} />
      <br />
      <Button text="Play Again" handleClick={resetGame} />
    </div>
  );
}
