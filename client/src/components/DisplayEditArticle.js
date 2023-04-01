import React from "react";
import {useNavigate } from "react-router-dom";

const DisplayEditArticle = ({ elem, removeArticle }) => {
  const navigator = useNavigate();
  // Deletes an article
  function handleDelete() {
    fetch(`/articles/${elem.id}`, {
      method: "DELETE",
    }).then(() => console.log("deleted"));
    removeArticle(elem.id);
  }
  return (
    <div
      className="card-size bg-light m-3  card-hover"
      id="editor-category-card"
    >
      <div className="card-image-top">
        <img src={elem.image} alt={elem.id} />
      </div>
      <div className="p-2 ps-3">
        <small>{elem.category}</small>
        <h4>{elem.part_title}</h4>
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <i class="bi bi-list fw-bold"></i>
            <button
              className="btn-read"
              onClick={() => {
                navigator(`/articles/${elem.id}`);
              }}
            >
              READ
            </button>
          </div>
          <div className="">
            <button className="btn-style " onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayEditArticle;

