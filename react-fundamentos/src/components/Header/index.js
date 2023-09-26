import React, { useContext } from "react";

import Button from "../Button";
import styles from "./Header.scss";

import { ThemeContext } from "../../context/ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
    </>
  );
}
