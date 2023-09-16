import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Cabeçalho 01",
      subtitle: "Subtítulo da notícia 01",
      likes: 10,
    },
    {
      id: Math.random(),
      title: "Cabeçalho 02",
      subtitle: "Subtítulo da notícia 02",
      likes: 20,
    },
    {
      id: Math.random(),
      title: "Cabeçalho 03",
      subtitle: "Subtítulo da notícia 03",
      likes: 50,
    },
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Cabeçalho 0${prevState.length + 1}`,
          subtitle: `Subtítulo da notícia 0${prevState.length + 1}`,
          likes: 50,
        },
      ]);
    }, 1500);
  }

  return (
    <>
      <Header title="Cabeçalho 01">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;
