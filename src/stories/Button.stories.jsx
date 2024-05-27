import React from "react";
import Button from "../components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button value="Click me" />;
export const Secondary = () => (
  <Button className="btn-secondary" value="Click me" />
);
export const Danger = () => <Button className="btn-danger" value="Click me" />;
