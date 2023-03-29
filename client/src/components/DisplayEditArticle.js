import React from "react";
import { Link } from "react-router-dom";

const DisplayEditArticle = ({ elem }) => {
  return (
    <div class="col-md-4">
      <h4>{elem.title}</h4>
      <p>{elem.summary}</p>
      <Link to={`/articles/${elem.id}`}>More</Link>
      <button className="btn btn-info">Edit</button>
      <button className="btn btn-info">delete</button>
      <div class="image-holder">
        <img src={elem.image} alt={elem.title} />
      </div>
    </div>
  );
};

export default DisplayEditArticle;
