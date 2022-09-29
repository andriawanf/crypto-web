import React from 'react'
import { LineChart, Line, Tooltip } from 'recharts';
const data = [{ name: 'Page A', uv: 1000, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 300, pv: 2100, amt: 2100 }, { name: 'Page C', uv: 600, pv: 2600, amt: 2600 }, { name: 'Page D', uv: 300, pv: 1600, amt: 1600 }, { name: 'Page D', uv: 450, pv: 600, amt: 600 }, { name: 'Page E', uv: 550, pv: 2000, amt: 2000 }, { name: 'Page E', uv: 150, pv: 100, amt: 100 }, { name: 'Page F', uv: 264, pv: 600, amt: 600 }, { name: 'Page G', uv: 567, pv: 600, amt: 600 }, { name: 'Page H', uv: 350, pv: 600, amt: 600 }, { name: 'Page I', uv: 950, pv: 600, amt: 600 },{ name: 'Page J', uv: 550, pv: 600, amt: 600 },{ name: 'Page K', uv: 600, pv: 600, amt: 600 },{ name: 'Page L', uv: 720, pv: 600, amt: 600 },{ name: 'Page M', uv: 700, pv: 600, amt: 600 },];


function Chart() {

    return (
        <div className=''>
            <LineChart width={950} height={200} data={data} className="w-full">
                <Line type="monotone" dataKey="uv" stroke="" fill='' className='stroke-[#be6ac8] fill-[#64a9c4]'/>
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default Chart