const handleInputRight = ({
  event,
  bottomBorder,
  currShapePos,
  rightWall,
  setCurrShapePos,
}: any) => {
  return (
    event.key === "ArrowRight" &&
    !bottomBorder.some((r: any) =>
      currShapePos.map((numb: number) => numb + 1).includes(r)
    ) &&
    !rightWall.some((r: any) => currShapePos.includes(r)) &&
    setCurrShapePos(currShapePos.map((numb: number) => numb + 1))
  );
};

export default handleInputRight;
