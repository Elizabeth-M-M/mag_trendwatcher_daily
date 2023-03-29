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
  const[articleToEdit, setArticleToEdit]=useState(null)
 console.log(user)
  useEffect(() => {
    fetch("/articles").then((res) => {
      if (res.ok) {
        res.json().then((data) => {

          setAllArticles(data)

        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);
  function handleRemoveArticle(id){
     let sortedArticles = allArticles.filter((article) => article.id !== id);
     setAllArticles(sortedArticles)
  }

  return (
    <div className="container">
      <Navbar user={user} onLogout={setUser} />
      <Routes>
        <Route
          path="/"
          element={<Home user={user} articles={allArticles} />}
        ></Route>
        <Route path="/login" element={<Login handleUser={setUser} />}></Route>
        <Route path="/article_add" element={<ArticleForm />}></Route>
        <Route
          path="/article_edit"
          element={<EditArticleForm articleToEdit={articleToEdit} />}
        ></Route>
        <Route
          path="/category"
          element={
            <Category
              articles={allArticles}
              user={user}
              removeArticle={handleRemoveArticle}
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
