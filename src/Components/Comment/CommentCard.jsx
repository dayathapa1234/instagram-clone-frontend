import React from 'react'
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
    const [isCommentLiked,setIsCommentLiked]= useState();

    const commentLikedHandle = () => {
        setIsCommentLiked(!isCommentLiked)
    }

  return (
    <div className='py-5 flex items-center justify-between'>
        <div>
            <div className='flex items-center'>
            <div>
                <img className='w-9 h-9 rounded-full' src='https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_1280.png' alt=""/>
            </div> 
            <div className='ml-3'>
                <p>
                    <span className='font-semibold'>UserName</span>
                    <span className='ml-2'>Message</span>
                </p>
                <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                    <span>1 min ago</span>
                    <span>23 Likes</span>
                </div>
            </div>
            </div>
        </div>
        {isCommentLiked?<AiFillHeart className='text-2xs hover:opacity-50 cursor-pointer text-red-600' onClick={commentLikedHandle}/>:<AiOutlineHeart className='text-2xs hover:opacity-50 cursor-pointer' onClick={commentLikedHandle }/>}
    </div>
  )
}

export default CommentCard
