import React from 'react'

const CategoryBtn = ({btn, setCategory}) => {
  return (
    <button className="btn btn-info" onClick = {()=>{setCategory(btn)} }>
      {btn}
    </button>
  );
}

export default CategoryBtn
