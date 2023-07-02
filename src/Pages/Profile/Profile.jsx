import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import ProfileUserPostPart from '../../Components/ProfileComponents/ReqUserPostPart';

function Profile() {
  return (
    <div className='flex flex-col pl-30'>
        <div>
        <ProfileUserDetails/>
          </div>
        <div>
            <ProfileUserPostPart/>
        </div>
    </div>
  )
}

export default Profile
