import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import './App.css'
import { useNavigate } from 'react-router';

const DisplayArticle = ({ user, articleToEdit }) => {
  const navigator = useNavigate();
  const [oneArticle, setOneArticle] = useState({});
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`/articles/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setOneArticle(data);
          setReviews(data.reviews);
        });
      }
    });
  }, []);
  // console.log(reviews)

  function handleReview(e) {
    e.preventDefault();

    if (user === null) {
      navigator("/login");
    } else {
      let reviewFormData = {
        comment,
        user_id: user.id,
        article_id: oneArticle.id,
      };
      // console.log(reviewFormData)
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewFormData),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setReviews([...reviews, data]);
            setComment("");
          });
        } else {
          r.json().then((err) => console.log(err.errors));
        }
      });
    }
  }
  // console.log(comment)

  let reviewForm = (
    <div>
      <h6>Leave a Review</h6>

      <form onSubmit={handleReview}>
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
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-info">
          Post
        </button>
      </form>
    </div>
  );
  return (
    <>
      <div>
        {!user ? null : user.username !== "editor" ? null : (
          <button
            className="btn btn-info"
            onClick={() => {
              articleToEdit(oneArticle);
              navigator("/article_edit");
            }}
          >
            Edit
          </button>
        )}

        <h3>{oneArticle.title}</h3>
        <p className="p-2 fw-bold">{oneArticle.part1}</p>
        <p className="p-2">{oneArticle.part2}</p>
        <img src={oneArticle.image} alt="" />
        <p className="p-2">{oneArticle.part3}</p>
      </div>
      {!user
        ? reviewForm
        : user.username !== "editor"
        ? reviewForm
        : null}

     
      <div>
        {reviews.length === 0 ? (
          <h6>No reviews done for this article</h6>
        ) : (
          reviews.map((review, ind) => {
            return (
              <div key={ind}>
                <h6>{review.user.username}</h6>
                <p>{review.comment}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default DisplayArticle