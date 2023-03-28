import React from "react";
import { Link } from "react-router-dom";

const ArticleImage = ({elem}) => {
  return (
    <div class="news-container float-md-start">
      <h4>{elem.title}</h4>
      <p>{elem.summary}</p>
      <Link to={`/articles/${elem.id}`}>
        More
      </Link>
      <div class="image-holder">
        <img src={elem.image} alt={elem.title} />
      </div>
    </div>
  );
};

export default ArticleImage;
