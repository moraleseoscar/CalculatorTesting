// Componente de Pantalla
const Display = ({ displayValue }) => {
    return (
      <div
        className="display bg-dark text-white p-2 mb-3 rounded"
        data-testid="calculator-display"
      >
        {displayValue}
      </div>
    );
  };

export default Display;