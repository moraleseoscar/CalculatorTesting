// Componente de Botón
const Button = ({ onClick, value, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
