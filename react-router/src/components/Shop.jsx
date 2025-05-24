import React from 'react'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
  
  const navigate = useNavigate();

  function clickHandler() {
    // move to about page
    navigate('/about');
  }

  function backHandler() {
    // move to back of page
    navigate(-1);
  }

  return (
    <div>
      <div>
        Shop Page
      </div>

      <button className='py-1 px-2 border rounded-md mt-4 bg-red-500 text-white' onClick={clickHandler}>
        About
      </button>

      <button className='py-1 px-2 border rounded-md m-4 bg-purple-800 text-white' onClick={backHandler}>
        Back
      </button>

    </div>
  )
}

export default Shop