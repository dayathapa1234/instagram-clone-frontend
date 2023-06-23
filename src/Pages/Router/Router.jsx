import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'

const Router = () => {
  return (
    <div>
        <div className='flex'>
            <div className='w-[20%] border border-l-slate-500'>
                <Sidebar/>
            </div>
            {/* className='w-[63%] px-[10%]' */}
            <div className='w-fill'>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    
                    <Route path='/username' element={<Profile />}></Route>
                    
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Router
