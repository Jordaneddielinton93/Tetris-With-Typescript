import { useState } from "react";

type board = {
  color: string;
  squareTaken: boolean;
}[];

export default function Board() {
  let [board, setBoard] = useState<board>([
    ...Array(100).fill({ color: "", squareTaken: false }),
  ]);
  return { board, setBoard };
}
