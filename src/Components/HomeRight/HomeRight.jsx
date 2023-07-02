import React from 'react'
import SuggetionCard from './SuggetionCard'

const HomeRight = () => {
  return (
    <div>
      <div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div>
                <img className='w-12 h-12 rounded-full' src='https://cdn.pixabay.com/photo/2023/06/14/11/47/carnival-8062929_1280.jpg' alt='' />
              </div>
              <div className='ml-2'>
                <p>FullName</p>
                <p className='opacity-70'>Username</p>
              </div>
            </div>
            <div>
              <p className='text-blue-700 font-semibold'>Switch</p>
            </div>
          </div>
          <div className='flex items-center justify-between mt-5'>
            <div>
              <p className='opacity-70 font-semibold'>Suggestions for you</p>
            </div>
            <div>
              <p className='font-semibold'>See All</p>
            </div>
          </div>
          <div className='space-y-5 mt-5'>
            {[1, 1, 1, 1, 1].map((item) => (<SuggetionCard />))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRight
