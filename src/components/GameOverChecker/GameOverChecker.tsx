import React from "react";
import { flatListOfShapes } from "../listOfShapes/listOfShapes";

export default function GameOverChecker({
  currShapePos,
  setCurrShapePos,
  setGameOver,
  bottomBorder,
}: any) {
  if (
    currShapePos.every((elem: any) => flatListOfShapes.includes(elem)) &&
    currShapePos.every((elem: any) => bottomBorder.includes(elem))
  ) {
    setCurrShapePos([111, 111, 111, 111]);
    setGameOver(true);
  }
}
