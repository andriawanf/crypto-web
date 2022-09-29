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
                        <li className=''>
                            <svg version="1.1" baseProfile="full" className='rounded-l-full absolute left-2 top-[205px] fill-[#15141a]'
                                width="120" height="70"
                                xlmns="http://www/w3/org/2000/svg">
                                <rect width="100%" height="100%"></rect>
                            </svg>
                            <a href="/#" className='relative'>
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
                    <img src='/ionut-comanici-RDcEWH5hSDE-unsplash.jpg' alt="" className='w-10 h-10 object-cover rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default SideBar
