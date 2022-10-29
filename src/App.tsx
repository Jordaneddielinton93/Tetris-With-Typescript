import { useState } from "react";

import "./App.css";
import Board from "./components/Board/Board";
import HandleInputDirection from "./components/HandleInputDirection/HandleInputDirection";
import IsShapeBorderCollision from "./components/IsShapeBorderCollision/IsShapeBorderCollision";
import { randomColor } from "./components/listOfColors/listOfColors";
import { randomShape } from "./components/listOfShapes/listOfShapes";
import MoveShapeDownEverySecond from "./components/MoveShapeDownEverySecond/MoveShapeDownEverySecond";
import Bubbles from "./components/Bubbles/Bubbles";
import GameOver from "./components/GameOver/GameOver";
import GameOverChecker from "./components/GameOverChecker/GameOverChecker";
import NextShape from "./components/NextShape/NextShape";
import WonARowChecker from "./components/WonARowChecker/WonARowChecker";
import BoardUi from "./components/Board/BoardUi";

function App() {
  let { board, setBoard } = Board();

  let [currColor, setCurrColor] = useState(randomColor);
  let [nextShapePos, setNextShapePos] = useState(randomShape);
  let [currShapePos, setCurrShapePos] = useState(randomShape);

  let [bottomBorder, setBottomBorder] = useState([
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ]);
  HandleInputDirection({ currShapePos, setCurrShapePos, bottomBorder });

  WonARowChecker({ board, setBoard, bottomBorder, setBottomBorder });
  IsShapeBorderCollision({
    currShapePos,
    setCurrShapePos,
    board,
    setBoard,
    currColor,
    setCurrColor,
    bottomBorder,
    setBottomBorder,
    setNextShapePos,
    nextShapePos,
  });
  let [gameOver, setGameOver] = useState(false);

  MoveShapeDownEverySecond({ currShapePos, setCurrShapePos, gameOver });
  GameOverChecker({ currShapePos, setCurrShapePos, setGameOver, bottomBorder });

  console.log(bottomBorder);
  return (
    <div className="App">
      {gameOver ? (
        <GameOver
          setBottomBorder={setBottomBorder}
          setGameOver={setGameOver}
          setBoard={setBoard}
          setCurrShapePos={setCurrShapePos}
          setCurrColor={setCurrColor}
        />
      ) : (
        <>
          <NextShape nextShapePos={nextShapePos} />
          <BoardUi
            board={board}
            currShapePos={currShapePos}
            currColor={currColor}
          />
        </>
      )}
      <Bubbles />
    </div>
  );
}

export default App;
