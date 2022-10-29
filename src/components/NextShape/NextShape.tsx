import { memo } from "react";
import "./nextShape.css";

function NextShape({ nextShapePos }: any) {
  return (
    <>
      <div className="nextShapeContainer">
        <div className="nextShape">
          {[...Array(40).fill({ color: "", squareTaken: false })].map(
            ({ color, squareTaken }, currBlockPos: number) => {
              return (
                <div
                  key={currBlockPos}
                  style={{
                    background: squareTaken
                      ? color
                      : nextShapePos.includes(currBlockPos)
                      ? "red"
                      : "white",
                  }}
                  className="nextblock"
                ></div>
              );
            }
          )}
        </div>
      </div>
      <h1 className="nextShapeText">Next Shape</h1>
    </>
  );
}
export default memo(NextShape);
