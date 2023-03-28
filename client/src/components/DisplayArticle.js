import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import './App.css'

const DisplayArticle = () => {
  const[oneArticle, setOneArticle]=useState({})
  let { id } = useParams();
  useEffect(() => {
    fetch(`/articles/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setOneArticle(data);
        });
      }
    });
  }, []);
  // console.log(id)
  return (
    <>
      <div>
        <h3>{oneArticle.title}</h3>
        <p>{oneArticle.content}</p>
        <img src={oneArticle.image} alt="" />
      </div>
      <div>
        <h6>Leave a Review</h6>

        <form>
          <div class="d-flex">
            <div class="content text-center">
              <div class="stars">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1"></label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-info">
            Post
          </button>
        </form>
      </div>
    </>
  );
}

export default DisplayArticle