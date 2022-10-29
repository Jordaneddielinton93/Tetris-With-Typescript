import React, { useState } from "react";

type Props = {};

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
