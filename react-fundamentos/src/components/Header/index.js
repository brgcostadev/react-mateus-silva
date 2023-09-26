import React, { useContext } from "react";

import Button from "../Button";

import Title from "../Title";

import { ThemeContext } from "../../context/ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
    </>
  );
}
