import React from 'react'

const ArticleText = ({elem}) => {
  return (
    <div class="p-2">
      <h5>{elem.title}</h5>
      <p>
        {elem.summary}
      </p>
    </div>
  );
}

export default ArticleText