import React from "react";
import { Link } from "react-router-dom";

const ArticleImage2 = ({ elem }) => {
  return (
    <div class="">
      <h4>{elem.title}</h4>
      <h6>{elem.category}</h6>
      <p>{elem.summary}</p>
      <Link to={`/articles/${elem.id}`}>More</Link>
      {elem.id % 2 !== 0 ? null : (
        <div class="image-holder">
          <img src={elem.image} alt={elem.title} />
        </div>
      )}
    </div>
  );
};

export default ArticleImage2;
