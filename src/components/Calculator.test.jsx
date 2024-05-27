import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  // Pruebas para verificar que se inicio correctamente el display
  test("renders initial display value", () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId("calculator-display");
    expect(display).toHaveTextContent("0");
  });

  // Pruebas para operaciones aritméticas y resultado
  test("performs addition correctly", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    const display = getByTestId("calculator-display");
    expect(display).toHaveTextContent("15");
  });

  // Pruebas para operaciones aritméticas y resultado
  test("just 9 numbers", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("4"));
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("7"));
    fireEvent.click(getByText("8"));
    fireEvent.click(getByText("9"));
    fireEvent.click(getByText("0"));
    const display = getByTestId("calculator-display");
    expect(display).toHaveTextContent("123456789");
  });

  // Pruebas para el botón de limpieza
  test("clears the display on clear button click", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("0"));
    fireEvent.click(getByText("C"));
    const display = getByTestId("calculator-display");
    expect(display).toHaveTextContent("0");
  });

  // Pruebas para el botón de retroceso
  test("deletes last character on backspace button click", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("<-"));
    const display = getByTestId("calculator-display");
    expect(display).toHaveTextContent("12");
  });

  // Pruebas para simbolos negativos
  test("verify negatives numbers", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    const display = getByTestId("calculator-display");
    expect(display).toHaveTextContent("ERROR");
  });

  // Pruebas para simbolos negativos
  test("verify greater than 999999999", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText("9"));
    for (var i = 0; i < 8; i++) {
      fireEvent.click(getByText("0"));
    }

    fireEvent.click(getByText("*"));
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("0"));
    fireEvent.click(getByText("="));
    const display = getByTestId("calculator-display");
    expect(display).toHaveTextContent("ERROR");
  });

  // Pruebas para divisiones sin pasar 9 digitos
  test("verify division with limit of 9 char", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText("8"));
    fireEvent.click(getByText("9"));
    fireEvent.click(getByText("/"));
    fireEvent.click(getByText("9"));
    fireEvent.click(getByText("="));
    const display = getByTestId("calculator-display");
    expect(display).toHaveTextContent("9.8888889");
  });
});
