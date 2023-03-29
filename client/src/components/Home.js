import React, { useEffect, useState } from "react";
import ArticleText from "./ArticleText";
import ArticleImage from "./ArticleImage";
import { useNavigate } from "react-router-dom";

const Home = ({ user, articles }) => {
  const navigator = useNavigate();
  const [headerArticle, setHeaderArticle] = useState({});

  useEffect(() => {
    if (articles.length > 0) {
      setHeaderArticle(articles.slice(-1)[0]);
    }
  }, []);

  let rightArticles = articles.slice(0, 4).map((article, i) => {
    return <ArticleText elem={article} key={i} />;
  });
  let userHomePage = (
    <div>
      <div class="header">
          <div class="row">
            <div class="col-md-8 header-content">
              <div class="image-holder-header">
                <img
                  src={
                    articles.length === 0
                      ? "https://t.ly/_JOz"
                      : headerArticle.image
                  }
                  alt=""
                />
              </div>
              <div class="header-floater bg-light p-4">
                <h6>
                  {articles.length === 0 ? "Lifestyle" : headerArticle.category}
                </h6>
                <h3>
                  {articles.length === 0
                    ? "A Walk to Remember"
                    : headerArticle.title}
                </h3>
                <button class="btn btn-info">Read More</button>
              </div>
            </div>

            <div class="col-md-4">
              <h6>Recent News</h6>
              {  rightArticles}
            </div>
          </div>
        </div>
        
        
      </div>

   
  );
  let editorHomePage = (
    <div>
      <h3
        onClick={() => {
          navigator("/category");
        }}
        style={{ cursor: "pointer" }}
      >
        View Articles
      </h3>
    </div>
  );

  return (
    <>
      <div className="container">
        {user ? <p>Welcome, {user.username}</p> : null}
        {!user ? userHomePage : user.username !== "editor" ? userHomePage : editorHomePage}
      </div>
    </>
  );
};

export default Home;
{
  /* <div class="image-holder-header">
  <img
    src={articles.length === 0 ? "https://t.ly/_JOz" : headerArticle.image}
    alt=""
  />
</div>; */
}

{
  /* <h6>Recent News</h6>;
{
  rightArticles;
} */
}

// incase more categories
//  <div class="container article-bg">
//    <div class="clearfix">{/* {articlelist} */}</div>
//  </div>;

// const array = ["a", "b", "c", "d"];
// const n = 3;

// const result = array.slice(-n).slice(0, array.length - 2);

// console.log(result);

{
  /* <div class="header">
          <div class="row">
            <div class="col-md-8 header-content">
              <div class="image-holder-header">
                <img
                  src={
                    articles.length === 0
                      ? "https://t.ly/_JOz"
                      : headerArticle.image
                  }
                  alt=""
                />
              </div>
              <div class="header-floater bg-light p-4">
                <h6>
                  {articles.length === 0 ? "Lifestyle" : headerArticle.category}
                </h6>
                <h3>
                  {articles.length === 0
                    ? "A Walk to Remember"
                    : headerArticle.title}
                </h3>
                <button class="btn btn-info">Read More</button>
              </div>
            </div>

            <div class="col-md-4">
              <h6>Recent News</h6>
              {  rightArticles}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2
          onClick={() => {
            navigator("/category");
          }}
          style={{ cursor: "pointer" }}
        >
          More News
        </h2> */
}
