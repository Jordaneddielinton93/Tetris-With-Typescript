import { render } from "@testing-library/react";
import Board from "../Board";

it("should return an array of objects", () => {
  let { board, setBoard } = Board();
  console.log(board);
  expect(board.length).toBe(100);
});
