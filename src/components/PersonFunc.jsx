const PersonFunc = ({ name, surname, age }) => {
  return (
    <div>
      <span>
        Nombre y apellido: {name} {surname},{" "}
      </span>
      <span>edad: {age}</span>
    </div>
  );
};

export default PersonFunc;
