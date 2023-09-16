import React from "react";

export default function Post(props) {
  return (
    <article>
      <strong>{props.post.title}</strong>
      <br />
      <small>{props.post.subtitle}</small>
      <br />
      Media: {props.likes / 2}
      <br />
      <br />
    </article>
  );
}