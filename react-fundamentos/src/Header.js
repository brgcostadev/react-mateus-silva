import React, { useContext } from "react";
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
    </>
  );
}
