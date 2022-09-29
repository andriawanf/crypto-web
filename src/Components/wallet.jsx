import React from 'react'

function wallet() {
    return (
        <div className='card p-6 bg-[#1b1a20] rounded-3xl border border-black w-full'>
            <div>
                <h1 className='text-3xl font-semibold text-white'>$2408</h1>
                <p className='font-medium text-gray-500'>0.1345 BTC</p>
            </div>
            <div className='flex space-x-2 mt-6 justify-center mx-auto'>
                <button className='w-32 py-4 rounded-xl bg-[#15141a] text-white font-medium border-gray-800 border'>Get</button>
                <button className='w-32 py-4 rounded-xl bg-[#15141a] text-white font-medium border-gray-800 border'>Send</button>
            </div>
        </div>
    )
}

export default wallet