type Colors = string[];

export const listOfColors: Colors = [
  "red",
  "green",
  "orange",
  "blue",
  "purple",
  "yellow",
  "pink",
  "lightblue",
  "lightgrey",
];

export function randomColor() {
  return listOfColors[Math.floor(Math.random() * listOfColors.length)];
}
