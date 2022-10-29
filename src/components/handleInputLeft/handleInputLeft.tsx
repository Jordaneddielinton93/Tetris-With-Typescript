const handleInputLeft = ({
  event,
  bottomBorder,
  currShapePos,
  leftWall,
  setCurrShapePos,
}: any) => {
  return (
    event.key === "ArrowLeft" &&
    !bottomBorder.some((r: any) =>
      currShapePos.map((numb: number) => numb - 1).includes(r)
    ) &&
    !leftWall.some((r: any) => currShapePos.includes(r)) &&
    setCurrShapePos(currShapePos.map((numb: number) => numb - 1))
  );
};

export default handleInputLeft;
