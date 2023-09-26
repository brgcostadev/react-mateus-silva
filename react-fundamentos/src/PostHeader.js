import React from "react";
import Button from "./Button";

export default function PostHeader(props) {
  return (
    <>
      <strong className="title">
        {props.post.read && <s>{props.post.title}</s>}
        {!props.post.read && props.post.title}
      </strong>
      <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
    </>
  );
}
