import { useEffect } from "react";
import handleInputLeft from "../handleInputLeft/handleInputLeft";
import handleInputRight from "../handleInputRight/handleInputRight";

export default function HandleInputDirection({
  currShapePos,
  setCurrShapePos,
  bottomBorder,
}: any) {
  let leftWall = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  let rightWall = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

  function handleKeyDown(event: any) {
    handleInputLeft({
      event,
      bottomBorder,
      currShapePos,
      leftWall,
      setCurrShapePos,
    });

    handleInputRight({
      event,
      bottomBorder,
      currShapePos,
      rightWall,
      setCurrShapePos,
    });

    event.key === "ArrowDown" &&
      setCurrShapePos(currShapePos.map((numb: number) => numb + 10));
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return <div>HandleInputDirection</div>;
}
