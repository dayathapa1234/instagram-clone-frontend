import React from 'react'
import {TbCircleDashed} from 'react-icons/tb';

const ProfileUserDetails = () => {
  return (
    <div>
      <div className='py-10 w-full'>
        <div className='flex'>
            <div className='w-[15%]'>
                <img className="w-32 h-32 rounded-full" src="https://images.freeimages.com/vhq/images/previews/c7e/sunflower-9820.png" alt="" ></img>
            </div>

            <div className='space-y-5 text-xs'>
                <div className='flex items-center space-x-10'>
                    <p>username</p>
                    <button>Edit Profile</button>
                    <TbCircleDashed></TbCircleDashed>
                </div>
                <div className='flex space-x-10'>
                    <div>
                        <span className='font-semibold mr-2'>10</span>
                        <span>posts</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>5</span>
                        <span>follower</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>5</span>
                        <span>following</span>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <p className='font-semibold'>Full Name</p>
                    <p className='font-thin text-sm'>Bio</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserDetails
