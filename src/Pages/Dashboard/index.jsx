import React from 'react'
import SideBar from '../../Components/SideBar'

function index() {
  return (
    <div className='bg-[#302e39] w-full h-screen'>
        <div className='flex flex-nowrap'>
            <SideBar/>
            <div className='w-full bg-[#211e29] mt-5 mr-5 mb-5 p-10 rounded-3xl'>
                <h1>hello</h1>
            </div>
        </div>
    </div>
  )
}

export default index