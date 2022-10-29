import React, { useEffect } from "react";

type Props = {};

function MoveShapeDownEverySecond({
  currShapePos,
  setCurrShapePos,
  gameOver,
}: any) {
  useEffect(() => {
    let interval = setInterval(() => {
      if (gameOver) return;
      setCurrShapePos(currShapePos.map((numb: number) => numb + 10));
      // as it says on the tin moveshape down every 2 seconds
    }, 2000);
    return () => clearInterval(interval);
  });
}
export default MoveShapeDownEverySecond;
