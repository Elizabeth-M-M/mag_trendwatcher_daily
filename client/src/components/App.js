import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Category from "./Category";
import DisplayArticle from "./DisplayArticle";
const App = () => {
  const [user, setUser] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
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

  return (
    <div className="container">
      <Navbar user={user} onLogout={setUser} />
      <Routes>
        <Route
          path="/"
          element={<Home user={user} articles={allArticles} />}
        ></Route>
        <Route path="/login" element={<Login handleUser={setUser} />}></Route>
        <Route
          path="/category"
          element={<Category articles={allArticles} user={user} />}
        ></Route>
        <Route
          path="/articles/:id"
          element={<DisplayArticle user={user} />}
        ></Route>
        <Route path="/signup" element={<Signup handleUser={setUser} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
