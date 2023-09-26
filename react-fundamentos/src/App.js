import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";
import styles from "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Cabeçalho 01",
      subtitle: "Subtítulo da notícia 01",
      likes: 10,
      read: false,
    },
    {
      id: Math.random(),
      title: "Cabeçalho 02",
      subtitle: "Subtítulo da notícia 02",
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: "Cabeçalho 03",
      subtitle: "Subtítulo da notícia 03",
      likes: 50,
      read: true,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Cabeçalho 0${prevState.length + 1}`,
        subtitle: `Subtítulo da notícia 0${prevState.length + 1}`,
        likes: 50,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <h2 className={styles.title}>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </ThemeProvider>
  );
}

export default App;
