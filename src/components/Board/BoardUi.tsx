import React, { memo } from "react";

function BoardUi({ board, currShapePos, currColor }: any) {
  console.log(board.length);
  return (
    <div className="board">
      {board.map(({ color, squareTaken }: any, currBlockPos: number) => {
        return (
          <div
            key={Math.random() * 20}
            style={{
              background: squareTaken
                ? color
                : currShapePos.includes(currBlockPos)
                ? currColor
                : "white",
            }}
            className="block"
          ></div>
        );
      })}
    </div>
  );
}
export default memo(BoardUi);
