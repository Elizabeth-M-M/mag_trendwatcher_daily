import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Category from "./Category";
import DisplayArticle from "./DisplayArticle";
import ArticleForm from "./ArticleForm";
import EditArticleForm from "./EditArticleForm";

const App = () => {

  const [user, setUser] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  const [articleToEdit, setArticleToEdit] = useState(null);
  const [category, setCategory] = useState("All");
  const categoryBtns = [
    "All",
    "Lifestyle",
    "Travel",
    "Sport",
    "Technology",
    "Gaming",
    "Science",
    "Food",
    "Business",
  ];
// Fetches all articles
  useEffect(() => {
    fetch("/articles").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setAllArticles(data);
        });
      }
    });
  }, []);
// Keeps a user logged in
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleRemoveArticle(id) {
    let sortedArticles = allArticles.filter((article) => article.id !== id);
    setAllArticles(sortedArticles);
  }

  function handleArticleAdd(article) {
    setAllArticles([...allArticles, article]);
  }

  // console.log(allArticles.length);

  return (
    <div>
      <Navbar user={user} onLogout={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              user={user}
              articles={allArticles}
              categoryBtns={categoryBtns}
              setCategory={setCategory}
            />
          }
        ></Route>
        <Route path="/login" element={<Login handleUser={setUser} />}></Route>
        <Route
          path="/article_add"
          element={<ArticleForm onArticleAdd={handleArticleAdd} />}
        ></Route>
        <Route
          path="/article_edit"
          element={<EditArticleForm articleToEdit={articleToEdit} />}
        ></Route>
        <Route
          path="/category"
          element={
            <Category
              categoryBtns={categoryBtns}
              articles={allArticles}
              user={user}
              removeArticle={handleRemoveArticle}
              setCategory={setCategory}
              category={category}
            />
          }
        ></Route>
        <Route
          path="/articles/:id"
          element={
            <DisplayArticle user={user} articleToEdit={setArticleToEdit} />
          }
        ></Route>
        <Route path="/signup" element={<Signup handleUser={setUser} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
