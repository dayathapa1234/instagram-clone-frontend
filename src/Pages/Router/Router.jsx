import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'

const Router = () => {
  return (
    <div>
        <div className='flex'>
            <div className='w-[20%] border border-l-slate-500'>
                <Sidebar/>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Router
