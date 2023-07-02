import React from 'react'
import { useState } from 'react'
import { BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import './PostCard.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import CommentModal from '../Comment/CommentModal'
import { useDisclosure } from '@chakra-ui/react'

const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState();
    const [isPostLiked, setIsPostLiked] = useState();
    const [isSaved, setIsSaved] = useState();
    const {onClose, isOpen, onOpen} = useDisclosure();

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }

    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }

    const handleSaved = () => {
        setIsSaved(!isSaved);
    }

    const handleOpenCommentModal=()=>{
        onOpen()
    }

    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12 rounded-full' src='https://cdn.pixabay.com/photo/2023/06/18/07/31/willow-warbler-8071471_1280.jpg' alt="" />
                        <div className='pl-2'>
                            <p className='font-semibold text-sm'>Username</p>
                            <p className='font-thin text-sm'>Location</p>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick} />
                        <div className='dropdown-content'>
                            {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src='https://cdn.pixabay.com/photo/2023/06/14/06/22/cat-8062388_1280.jpg' alt='' />
                </div>
                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}
                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                    </div>

                    <div>
                        {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSaved} /> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSaved} />}
                    </div>
                </div>
                <div className='w-full py-1 px-5'>
                    <p>10 likes</p>
                    <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
                </div>
                <div className='border border-t w-full'>
                    <div className='flex w-full items-center px-5'>
                        <BsEmojiSmile className='text-2xl' />
                        <input className='commentInput focus:ring-0' type="text" placeholder='Add a comment ....' />
                    </div>
                </div>
            </div>
            <CommentModal onClose={onClose} isOpen={isOpen} isSaved={isSaved} isPostLiked={isPostLiked} handlePostLike={handlePostLike} handleSaved={handleSaved}/>
        </div>
    )
}

export default PostCard
