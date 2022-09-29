import React from 'react'

function ListCoin() {
  return (
    <div className='flex flex-col gap-4 w-full '>
        <div className='card px-6 rounded-full w-full py-4 flex justify-between items-center bg-[#1b1a20]'>
            <div className='inline-flex gap-2 items-center text-white'>
                <i className='bx bxl-bitcoin text-3xl text-yellow-400'></i>
                <h1 className='text-xl font-medium'>Bitcoin</h1>
            </div>
            <h1 className='text-white text-base font-medium'>$284.2</h1>
            <h1 className='text-white text-base font-medium'>$758134569</h1>
            <h1 className='text-[#52a69a] text-base font-medium'>+ 62.96%</h1>
        </div>
        <div className='card px-6 rounded-full w-full py-4 flex justify-between items-center bg-[#1b1a20]'>
            <div className='inline-flex gap-2 items-center text-white'>
                <i className='bx bxl-bitcoin text-3xl text-yellow-400'></i>
                <h1 className='text-xl font-medium'>Bitcoin</h1>
            </div>
            <h1 className='text-white text-base font-medium'>$284.2</h1>
            <h1 className='text-white text-base font-medium'>$758134569</h1>
            <h1 className='text-[#52a69a] text-base font-medium'>+ 62.96%</h1>
        </div>
    </div>
  )
}

export default ListCoin