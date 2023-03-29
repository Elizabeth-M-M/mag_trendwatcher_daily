import React, { useState } from "react";
import ArticleImage from "./ArticleImage";
import ArticleText from "./ArticleText";
import CategoryBtn from "./CategoryBtn";
import DisplayEditArticle from "./DisplayEditArticle";
import { useNavigate } from "react-router";
import ArticleImage2 from "./ArticleImage2";

const Category = ({
  articles,
  user,
  removeArticle,
  categoryBtns,
  setCategory,
  category
}) => {
  const [search, setSearch] = useState("");
  const navigator = useNavigate();
  // const [selectedArticles, setSelectedArticles] = useState([]);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  let found = articles.filter((article) => {
    let articleName = article.title.toLocaleLowerCase();
    let articleCategory = article.category.toLocaleLowerCase();

    if (search === "") {
      return true;
    } else if (
      articleName.includes(search) ||
      articleCategory.includes(search)
    ) {
      return article;
    }
  });

  let selectedArticles = [];
  if (category === "All") {
    if (user && user.username === "editor") {
      console.log(true);
    }
    let i = 0;
    do {
      selectedArticles.push(
        // articles[Math.floor(Math.random() * articles.length)]
        articles[i]
      );
      i++;
    } while (i < 10);
  } else {
    selectedArticles = articles.filter((article) => {
      if (category === article.category) {
        return article;
      }
    });
  }
  //  console.log(selectedArticles)

  let leftArticles = selectedArticles.slice(0, 4).map((article, i) => {
    return <ArticleImage elem={article} key={i} />;
  });
    let rightArticles = selectedArticles.slice(4, 8).map((article, i) => {
      return <ArticleImage2 elem={article} key={i} />;
    });
  // console.log(category)
  // console.log(user);
  let userView = (
    <>
      <div>
        {categoryBtns.map((btn) => {
          return <CategoryBtn key={btn} btn={btn} setCategory={setCategory} />;
        })}
      </div>
      <div class="container article-bg">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div className="col">
                {leftArticles}
                </div>
              <div className="col">
                {rightArticles}
                </div>
            </div>
          </div>

          <div class="col-md-4">
            {selectedArticles.length <= 5 ? null : <h6>More News</h6>}
            {selectedArticles.length < 5
              ? null
              : selectedArticles.slice(6, 10).map((article, i) => {
                  return <ArticleText elem={article} key={i} />;
                })}
          </div>
        </div>
      </div>
    </>
  );
  let editorView = (
    <>
      <div className="container">
        <div className="ui large fluid icon input py-5">
          <input
            className="p-2"
            type="text"
            placeholder="Search for an article"
            value={search}
            onChange={handleSearch}
          />
          <i class="bi bi-search"></i>
        </div>
        <button
          className="btn btn-info"
          onClick={() => {
            navigator("/article_add");
          }}
        >
          Add article
        </button>
        <div className="row">
          {found.map((article, i) => {
            return (
              <DisplayEditArticle
                elem={article}
                key={i}
                removeArticle={removeArticle}
              />
            );
          })}
        </div>
      </div>
    </>
  );

  return (
    <>{!user ? userView : user.username !== "editor" ? userView : editorView}</>
  );
};

export default Category;
