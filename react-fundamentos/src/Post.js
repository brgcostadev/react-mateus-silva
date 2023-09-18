import React from "react";

export default function Post(props) {
  return (
    <article>
      <strong>{props.post.read ? <s>{props.post.title}</s> : props.post.title}</strong>
      <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
      <br />
      <small>{props.post.subtitle}</small>
      <br />
      Media: {props.post.likes/2}
      <br />
      <br />
    </article>
  );
}
