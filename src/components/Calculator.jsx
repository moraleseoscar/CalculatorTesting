import React, { useState } from "react";
import "./Calculator.css";
import Display from "./Display";
import Button from "./Button";

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
      <Display displayValue={displayValue} />
      <div className="row mb-2 mx-1">
        <Button
          className="btn btn-danger col-6"
          onClick={handleClear}
          value="C"
        />
        <Button
          className="btn btn-warning col-6"
          onClick={handleBackspace}
          value="<-"
        />
      </div>
      <div className="buttons">
        <div className="row mx-1 mb-2">
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("7")}
            value="7"
          />
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("8")}
            value="8"
          />
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("9")}
            value="9"
          />
          <Button
            className={`btn ${
              operator === "/" ? "btn-info" : "btn-primary"
            } col-3`}
            onClick={() => handleOperatorClick("/")}
            value="/"
          />
        </div>
        <div className="row mx-1 mb-2">
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("4")}
            value="4"
          />
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("5")}
            value="5"
          />
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("6")}
            value="6"
          />
          <Button
            className={`btn ${
              operator === "*" ? "btn-info" : "btn-primary"
            } col-3`}
            onClick={() => handleOperatorClick("*")}
            value="*"
          />
        </div>
        <div className="row mx-1 mb-2">
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("1")}
            value="1"
          />
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("2")}
            value="2"
          />
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("3")}
            value="3"
          />
          <Button
            className={`btn ${
              operator === "-" ? "btn-info" : "btn-primary"
            } col-3`}
            onClick={() => handleOperatorClick("-")}
            value="-"
          />
        </div>
        <div className="row mx-1 mb-2">
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick("0")}
            value="0"
          />
          <Button
            className="btn btn-secondary col-3"
            onClick={() => handleButtonClick(".")}
            value="."
          />
          <Button
            className="btn btn-success col-3"
            onClick={() => handleEqualClick()}
            value="="
          />
          <Button
            className={`btn ${
              operator === "+" ? "btn-info" : "btn-primary"
            } col-3`}
            onClick={() => handleOperatorClick("+")}
            value="+"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
