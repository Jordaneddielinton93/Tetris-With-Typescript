type shapes = number[][];

export const listOfShapes: shapes = [
  // straight shape
  [3, 4, 5, 6],
  [4, 14, 24, 34],
  // Z shape
  [4, 5, 15, 16],
  [15, 25, 14, 4],
  [4, 14, 5, 15],
  [14, 5, 15, 25],
  [14, 5, 15, 16],
];

export const flatListOfShapes = [
  3, 4, 5, 6, 4, 14, 24, 34, 4, 5, 15, 16, 15, 25, 14, 4,
];

export function randomShape() {
  return listOfShapes[Math.floor(Math.random() * listOfShapes.length)];
}
