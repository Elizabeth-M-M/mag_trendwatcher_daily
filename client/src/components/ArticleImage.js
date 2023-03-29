import React from "react";
import { Link } from "react-router-dom";

const ArticleImage = ({elem}) => {
  return (
    <div class="">
      <h4>{elem.title}</h4>
      <h6>{elem.category}</h6>
      <p>{elem.summary}</p>
      <Link to={`/articles/${elem.id}`}>More</Link>
      {elem.id % 2 == 0 ? null : (
        <div class="image-holder">
          <img src={elem.image} alt={elem.title} />
        </div>
      )}
    </div>
  );
};

export default ArticleImage;
{
  /* <div class="news-container float-md-start">
  <h4>{elem.title}</h4>
  <h6>{elem.category}</h6>
  <p>{elem.summary}</p>
  <Link to={`/articles/${elem.id}`}>More</Link>
  <div class="image-holder">
    <img src={elem.image} alt={elem.title} />
  </div>
</div>; */
}


//  <div className="row">
//   <div className="col bg-warning">
//     <div class="">
//       <h4>1some title</h4>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit reiciendis
//         non, modi placeat laborum magnam perspiciatis commodi...
//       </p>
//       <button className="btn btn-info">more</button>
//       <div class="image-holder">
//         <img src="https://images.pexels.com/photos/5346060/pexels-photo-5346060.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
//       </div>
//     </div>
//     <div class="">
//       <h4>1some title</h4>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit reiciendis
//         non, modi placeat laborum magnam perspiciatis commodi...
//       </p>
//       <button className="btn btn-info">more</button>
      
//     </div>
//   </div>
//   <div className="col bg-success">
//     <div class="">
//       <h4>3some title</h4>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit reiciendis
//         non, modi placeat laborum magnam perspiciatis commodi...
//       </p>
//       <button className="btn btn-info">more</button>
     
//     </div>
//     <div class="">
//       <h4>1some title</h4>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit reiciendis
//         non, modi placeat laborum magnam perspiciatis commodi...
//       </p>
//       <button className="btn btn-info">more</button>
//       <div class="image-holder">
//         <img src="https://images.pexels.com/photos/5346060/pexels-photo-5346060.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
//       </div>
//     </div>
//   </div>
// </div>