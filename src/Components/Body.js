import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import SearchVideo from './SearchVideo'
const Body = () => {
    return (
        <div className='flex'>

            <Sidebar />
            <Outlet />


        </div>
    )
}

export default Body