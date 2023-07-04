import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoryCircle = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/story")
  }
  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
      <img className='w-16 h-16 rounded-full' src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt=""></img>
      <p>UserName</p>
    </div>
  )
}

export default StoryCircle
