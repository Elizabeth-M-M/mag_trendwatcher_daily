import React from 'react'
import { useNavigate } from 'react-router';

const ArticleText = ({elem}) => {
  const navigator=useNavigate()
  return (
    <div class="p-2">
      <h5
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigator(`/articles/${elem.id}`);
        }}
      >
        {elem.title}
      </h5>
      <p>{elem.summary}</p>
    </div>
  );
}

export default ArticleText