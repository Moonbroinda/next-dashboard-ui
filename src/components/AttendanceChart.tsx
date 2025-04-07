"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Даваа',
    ирсэн: 60,
    чөлөөтэй: 40,
  },
  {
    name: 'Мягмар',
    ирсэн: 70,
    чөлөөтэй: 80,
    
  },
  {
    name: 'Лхагва',	
    ирсэн: 20,
    чөлөөтэй: 30,
    
  },
  {
    name: 'Пүрэв',	
    ирсэн: 80,
    чөлөөтэй: 90,
    
  },
  {
    name: 'Баасан',	
    ирсэн: 75,
    чөлөөтэй: 25,
  },
  
];
const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center '>
            <h1 className='text-lg font-semibold'>Ирц</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar dataKey="ирсэн" fill="#FAE27C"  
          legendType='circle'
          radius={[10,10,0,0]}    
          />
          <Bar dataKey="чөлөөтэй" fill="#C3EBFA" 
          legendType='circle'
          radius={[10,10,0,0]}    
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart