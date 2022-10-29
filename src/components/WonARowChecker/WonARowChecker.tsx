import React from "react";

export default function WonARowChecker({
  board,
  setBoard,
  bottomBorder,
  setBottomBorder,
  setHasWonRow,
}: any) {
  let multipleOf10 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  // 1. get each left side of block

  board.forEach(
    ({ squareTaken }: { squareTaken: boolean }, currBlockNumb: number) => {
      // 2. check if current block is a starting left side screen block
      if (multipleOf10.includes(currBlockNumb)) {
        let removed = [
          currBlockNumb,
          currBlockNumb + 1,
          currBlockNumb + 2,
          currBlockNumb + 3,
          currBlockNumb + 4,
          currBlockNumb + 5,
          currBlockNumb + 6,
          currBlockNumb + 7,
          currBlockNumb + 8,
          currBlockNumb + 9,
        ];
        if (
          squareTaken &&
          board[removed[1]].squareTaken &&
          board[removed[2]].squareTaken &&
          board[removed[3]].squareTaken &&
          board[removed[4]].squareTaken &&
          board[removed[5]].squareTaken &&
          board[removed[6]].squareTaken &&
          board[removed[7]].squareTaken &&
          board[removed[8]].squareTaken &&
          board[removed[9]].squareTaken
        ) {
          //  3. cutLine from board and add 10 blocks to the top as well as add orginal array, also removing from borderCollision

          board.splice(currBlockNumb, 10);
          // console.log(removed);

          board.unshift(...Array(10).fill({ color: "", squareTaken: false }));
          setBoard([...board]);
          setBottomBorder((prev: any) => [
            ...prev.filter((item: any) => {
              return !removed.includes(item);
            }),
          ]);
          console.log("removed");
          console.log("removed 2");
          console.log(bottomBorder);
          console.log("removed 22");
          console.log("removed 222");
        }
      }
    }
  );
}
