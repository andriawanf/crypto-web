/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

function SideBar() {
    return (
        <div className="flex">
            <link
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                rel="stylesheet"
            ></link>
            <div className="flex flex-col justify-between h-screen w-32 items-center ">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#64a9c4] to-[#be6ac8] py-10 px-6 ">
                    <h1>C&W</h1>
                </div>

                <div className='w-full'>
                    <ul className="flex flex-col space-y-10 w-full items-center text-white">
                        <li>
                            <a href="/#" className='px-'>
                                <i className="bx bx-category text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i className="bx bx-wallet text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i className="bx bx-sort text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i className="bx bx-candles text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i className="bx bx-cog text-2xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='py-10 px-6 '>
                    <img src="../Assets/images/ionut-comanici-RDcEWH5hSDE-unsplash.jpg" alt="" className='w-10 h-10 object-cover ' />
                </div>
            </div>
        </div>
    )
}

export default SideBar
