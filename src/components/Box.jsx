const Box = (props) => {
  const { boxColor, width, height } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: boxColor,
          width: width,
          height: height,
        }}></div>
    </>
  );
};
export default Box;
