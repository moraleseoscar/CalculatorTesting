import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleButtonClick = (value) => {
    if (displayValue.length >= 9 && !waitingForSecondOperand) return;

    if (waitingForSecondOperand) {
      setDisplayValue(value);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(
        displayValue === "0" || isResultDisplayed ? value : displayValue + value
      );
      setIsResultDisplayed(false);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand == null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, inputValue);
      const resultString = formatResult(result);
      setDisplayValue(resultString);
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
    setIsResultDisplayed(false);
  };

  const performCalculation = {
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
  };

  const formatResult = (result) => {
    if (result < 0 || result > 999999999) {
      return "ERROR";
    }
    const resultString = String(result);
    if (resultString.length > 9) {
      if (resultString.includes(".")) {
        const [integerPart, decimalPart] = resultString.split(".");
        const allowedDecimals = 8 - integerPart.length;
        return parseFloat(result).toFixed(allowedDecimals).slice(0, 9);
      } else {
        return "ERROR";
      }
    }
    return resultString;
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setIsResultDisplayed(false);
  };

  const handleBackspace = () => {
    setDisplayValue(displayValue.slice(0, -1) || "0");
  };

  const handleEqualClick = () => {
    const inputValue = parseFloat(displayValue);

    if (operator && firstOperand !== null) {
      const result = performCalculation[operator](firstOperand, inputValue);
      const resultString = formatResult(result);
      setDisplayValue(resultString);
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
      setIsResultDisplayed(true);
    }
  };

  return (
    <div className="calculator bg-light p-3 rounded shadow">
      <div className="display bg-dark text-white p-2 mb-3 rounded">
        {displayValue}
      </div>
      <div className="row mb-2 mx-1">
        <button className="btn btn-danger col-6" onClick={handleClear}>
          C
        </button>
        <button className="btn btn-warning col-6" onClick={handleBackspace}>
          &lt;-
        </button>
      </div>
      <div className="buttons">
        <div className="row mx-1 mb-2">
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className={`btn ${
              operator === "/" ? "btn-info" : "btn-primary"
            } col-3`}
            onClick={() => handleOperatorClick("/")}
          >
            /
          </button>
        </div>
        <div className="row mx-1 mb-2">
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className={`btn ${
              operator === "*" ? "btn-info" : "btn-primary"
            } col-3`}
            onClick={() => handleOperatorClick("*")}
          >
            *
          </button>
        </div>
        <div className="row mx-1 mb-2">
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className={`btn ${
              operator === "-" ? "btn-info" : "btn-primary"
            } col-3`}
            onClick={() => handleOperatorClick("-")}
          >
            -
          </button>
        </div>
        <div className="row mx-1">
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button className="btn btn-success col-3" onClick={handleEqualClick}>
            =
          </button>
          <button
            className={`btn ${
              operator === "+" ? "btn-info" : "btn-primary"
            } col-3`}
            onClick={() => handleOperatorClick("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
