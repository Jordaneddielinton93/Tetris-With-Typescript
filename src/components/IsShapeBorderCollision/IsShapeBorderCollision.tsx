import { useEffect } from "react";
import { randomColor } from "../listOfColors/listOfColors";
import { randomShape } from "../listOfShapes/listOfShapes";

export default function IsShapeBorderCollision({
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
}: any) {
  useEffect(() => {
    let isCollisionFound = currShapePos
      .map((number: number) => {
        return bottomBorder.includes(number);
      })
      .includes(true);
    console.log("current shape :", currShapePos);
    console.log("current border :", bottomBorder);
    // if there is a collision found between the shape and the bottom border set var to true

    if (isCollisionFound) {
      currShapePos.forEach((number: number) => {
        board[number] = { color: currColor, squareTaken: true };
      });
      setBoard((prev: any) => [...prev]);

      setCurrShapePos(nextShapePos);
      setNextShapePos(randomShape());
      setCurrColor(randomColor());

      setBottomBorder((prev: any) => [
        ...prev,
        ...currShapePos.map((n: number) => n - 10),
      ]);

      // if there is a collision on the bottomBorder with the shape then do the following
      // - create a new shape
      // - create a new color
      // - save the prev shape to the last location hit on bottom border
    }
    // "ignore error below"
  }, [currShapePos, board, bottomBorder]);
}
