import React from "react";
import Post from "./Post";
import Header from "./Header";

const posts = [
  { title: "Cabeçalho 01", subtitle: "Subtítulo da notícia 01", likes: 10 },
  { title: "Cabeçalho 02", subtitle: "Subtítulo da notícia 02", likes: 20 },
  { title: "Cabeçalho 03", subtitle: "Subtítulo da notícia 03", likes: 50 },
]

function App() {
  return (
    <>
      <Header title="Cabeçalho 01">
        <h2>Posts da semana</h2>
      </Header>
      <hr />

      {posts.map(post => (
          <Post
            key = {post.title}
            likes= {post.likes}
            post= {{
            title: post.title,
            subtitle: post.subtitle,
            }}
          />
      ))}
    </>
  );
}

export default App;
