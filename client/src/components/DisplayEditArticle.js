import React from "react";
import { Link } from "react-router-dom";

const DisplayEditArticle = ({ elem, removeArticle }) => {
  function handleDelete(){
    fetch(`/articles/${elem.id}`, {
      method: "DELETE",
    }).then(() => console.log("deleted"));
    removeArticle(elem.id)
  }
  return (
    <>
      <div class="col-md-4">
        <h4>{elem.title}</h4>
        <h6>{elem.category}</h6>
        <p>{elem.summary}</p>
        <Link to={`/articles/${elem.id}`}>More</Link>
        
        <button className="btn btn-info" onClick={handleDelete}>
          delete
        </button>
        
        <div class="image-holder">
          <img src={elem.image} alt={elem.title} />
        </div>
      </div>
      

      
    </>
  );
};

export default DisplayEditArticle;
