import React from 'react'
import { LineChart, Line, Tooltip } from 'recharts';
const data = [{ name: 'Page A', price: 1000, pv: 2400, amt: 2400 }, { name: 'Page B', price: 300, pv: 2100, amt: 2100 }, { name: 'Page C', price: 600, pv: 2600, amt: 2600 }, { name: 'Page D', price: 300, pv: 1600, amt: 1600 }, { name: 'Page D', price: 450, pv: 600, amt: 600 }, { name: 'Page E', price: 550, pv: 2000, amt: 2000 }, { name: 'Page F', price: 150, pv: 100, amt: 100 }, { name: 'Page G', price: 264, pv: 600, amt: 600 }, { name: 'Page G', price: 567, pv: 600, amt: 600 }, { name: 'Page H', price: 350, pv: 600, amt: 600 }, { name: 'Page I', price: 950, pv: 600, amt: 600 },{ name: 'Page J', price: 550, pv: 600, amt: 600 },{ name: 'Page K', price: 600, pv: 600, amt: 600 },{ name: 'Page L', price: 720, pv: 600, amt: 600 },{ name: 'Page M', price: 700, pv: 600, amt: 600 },];


function Chart() {

    return (
        <div className=''>
            <LineChart width={950} height={200} data={data} className="w-full">
                <Line type="monotone" dataKey="price" stroke="" fill='' className='stroke-[#be6ac8] fill-[#64a9c4]'/>
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default Chart