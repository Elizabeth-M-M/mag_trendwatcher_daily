import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EditArticleForm = ({ articleToEdit }) => {

  const navigator = useNavigate();
  const [errors, setErrors] = useState([]);
  const [articleFormData, setEditArticleFormData] = useState(articleToEdit);

  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setEditArticleFormData({
      ...articleFormData,
      [name]: value,
    });
  }
  // Edits an article
  function handleSubmit(event) {
    event.preventDefault();
    fetch(`/articles/${articleToEdit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleFormData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((article) => {
          console.log(article);
          setEditArticleFormData({
            title: "",
            content: "",
            image: "",
            category: "",
          });
          navigator(`/articles/${article.id}`);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="form-body">
      <div className="container">
        <div className="col-12 m-auto mt-3">
          <form
            className="row g-3 needs-validation text-light pt-5"
            onSubmit={handleSubmit}
            novalidate
          >
            <div className="col-12">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={handleInputs}
                name="title"
                value={articleFormData.title}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                onChange={handleInputs}
                name="image"
                value={articleFormData.image}
                required
              />
            </div>
            <div className="form-group col-12">
              <label for="category">Category</label>
              <select
                id="category"
                className="form-control"
                onChange={handleInputs}
                name="category"
                value={articleFormData.category}
              >
                <option selected>Business</option>
                <option>Lifestyle</option>
                <option>Travel</option>
                <option>Food</option>
                <option>Technology</option>
                <option>Gaming</option>
                <option>Sport</option>
                <option>Science</option>
              </select>
            </div>
            <div className="form-group">
              <label for="content"></label>
              <textarea
                className="form-control"
                id="content"
                rows="5"
                name="content"
                value={articleFormData.content}
                onChange={handleInputs}
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn-style">
                Edit Article
              </button>
            </div>
            <ul>
              {errors.length > 0
                ? errors.map((err) => <li key={err}>{err}</li>)
                : null}
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditArticleForm;
