import React from 'react'

const SuggetionCard = () => {
  return (
    <div className='flex item-center justify-between'>
      <div className='flex items-center'>
        <img className='h-9 w-9 rounded-full' src='https://cdn.pixabay.com/photo/2022/07/19/10/15/sea-7331682_1280.jpg' alt=''/>
        <div className='ml-2'>
            <p className='text-sm font-semibold'>Username</p>
            <p className='text-sm font-semibold opacity-70'>Follows you</p>
        </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggetionCard
