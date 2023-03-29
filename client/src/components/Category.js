import React, { useState } from "react";
import ArticleImage from "./ArticleImage";
import ArticleText from "./ArticleText";
import CategoryBtn from "./CategoryBtn";
import DisplayEditArticle from "./DisplayEditArticle";

const Category = ({ articles, user }) => {
  // const [selectedArticles, setSelectedArticles] = useState([]);
  const[category, setCategory]=useState('All')
const categoryBtns=["All", "Lifestyle", "Travel", "Sport", "Technology", "Gaming", "Science", "Food", "Business"]
 let selectedArticles=[]
 if (category === "All") {
  if(user&&user.username==="editor"){
    console.log(true)
  }
     let i = 0;
     do {
       selectedArticles.push(articles[Math.floor(Math.random() * articles.length)]);
       i++;
     } while (i < 10);
 }else{
  selectedArticles = articles.filter((article) => {
  if (category === article.category) {
     return article;
   }
 });

 }
//  console.log(selectedArticles)




  let leftArticles = selectedArticles.slice(0, 6).map((article, i) => {
    return <ArticleImage elem={article} key={i} />;
  });
  // console.log(category)
  console.log(user)
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
            <div class="clearfix">{leftArticles}</div>
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
        <h4>search</h4>
        <button className="btn btn-info">Add article</button>
        <div className="row">
          {articles.map((article, i) => {
            return<DisplayEditArticle elem={article} key={i} />;
          })}
          
        </div>
      </div>
    </>
  );

  return (
    <>
    {!user?userView:user.username!=="editor"?userView:editorView}
    </>
    
  );
};

export default Category;
