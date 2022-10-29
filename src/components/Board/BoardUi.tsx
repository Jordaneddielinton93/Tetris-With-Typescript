import { memo, useState } from "react";

function BoardUi({ board, currShapePos, currColor }: any) {
  let name = ["", "J", "O", "R", "D"];
  let count = 0;
  return (
    <div className="board">
      {board.map(({ color, squareTaken }: any, currBlockPos: number) => {
        if (currShapePos.includes(currBlockPos)) {
          count += 1;
        }
        if (count === 5) {
          count = 0;
        }
        return (
          <div
            key={currBlockPos}
            style={{
              background: squareTaken
                ? color
                : currShapePos.includes(currBlockPos)
                ? currColor
                : "white",
            }}
            className="block"
          >
            {currShapePos.includes(currBlockPos) && name[count]}
          </div>
        );
      })}
    </div>
  );
}
export default memo(BoardUi);
