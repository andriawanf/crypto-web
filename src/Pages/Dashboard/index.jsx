import React from 'react'
import SideBar from '../../Components/SideBar'
import Wallet from '../../Components/wallet'
import Gift from '../../Components/Gift'
import Chart from '../../Components/Chart'
import ListCoin from '../../Components/ListCoin'

function index() {
  return (
    <div className='bg-[#302e39] w-full h-screen'>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <div className='flex flex-nowrap'>
        <SideBar />
        <div className='w-full bg-[#15141a] mt-5 mr-5 mb-5 p-10 rounded-[3rem]'>
          <div className='flex flex-nowrap justify-between items-center'>
            <div>
              <h1 className='text-6xl font-medium text-white'>Hello, William 🙌</h1>
            </div>

            <div className='inline-flex space-x-2'>
              <select name="coin" id="select-coin" className='px-6 py-2 rounded-xl bg-[#1b1a20] text-white text-lg font-semibold'>
                <option value="BTC">BTC</option>
                <option value="BTC">BNB</option>
                <option value="BTC">TRX</option>
                <option value="BTC">Doge</option>
              </select>
              <button className='px-6 py-2 rounded-xl bg-gradient-to-br from-[#be6ac8] to-[#64a9c4] text-semibold text-white'>Connect wallet</button>
            </div>
          </div>

            <div className='grid grid-cols-12 space-x-8 mt-6 w-full'>
              <div className='col-span-3 space-y-8 w-full'>
                <Wallet/>
                <Gift/>
              </div>

              <div className='col-span-9 space-y-8 w-full '>
                <div className='card bg-[#444365] rounded-3xl mr-8'>
                  <div className='grid grid-cols-2 justify-between w-full py-10 px-10' >
                    <div className='flex gap-2 items-center justify-start'>
                      <i className='bx bxl-bitcoin bx-lg text-transparent bg-clip-text bg-gradient-to-br from-[#64a9c4] to-[#be6ac8]'></i>
                      <div>
                      <p className='text-sm font-medium text-gray-500'>USDT/WETH</p>
                      <h1 className='text-2xl font-semibold text-white'>Bitcoin</h1>
                      </div>
                    </div>
                    <div className='w-full '>
                      <h1 className='text-3xl font-semibold text-right text-white'>$2408</h1>
                      <p className='text-sm text-right font-medium text-[#52a69a]'>+171.21%</p>
                    </div>
                  </div>
                  <Chart/>
                </div>
                <div className='mr-9'>
                  <ListCoin/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index