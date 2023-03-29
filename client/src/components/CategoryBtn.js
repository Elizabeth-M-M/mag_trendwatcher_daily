import React from 'react'
import { useNavigate } from 'react-router';

const CategoryBtn = ({btn, setCategory}) => {
  const navigator= useNavigate()
  return (
    <button className="btn btn-info" onClick = {()=>{
      setCategory(btn)
      navigator('/category')
      } }>
      {btn}
    </button>
  );
}

export default CategoryBtn
