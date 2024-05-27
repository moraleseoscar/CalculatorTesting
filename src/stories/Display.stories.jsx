import React from "react";
import Display from "../components/Display";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Display",
  component: Display,
};

export const Default = () => <Display displayValue="123" />;
export const ZeroValue = () => <Display displayValue="0" />;
export const NegativeValue = () => <Display displayValue="-456" />;
export const ErrorValue = () => <Display displayValue="ERROR" />;
