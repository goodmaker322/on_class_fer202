const Hello = ({ who, age }) => {
  return (
    <>
      <div>
        Helo ,{who}
        {age && `!Tuoi ${age}`}
      </div>
    </>
  );
};
export default Hello;
