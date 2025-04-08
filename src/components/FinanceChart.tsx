"use client"
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1 сар',
    орлого: 4000,
    зарлага: 2400,
  },
  {
    name: '2 сар',
    орлого: 3000,
    зарлага: 1398,
  },
  {
    name: '3 сар',
    орлого: 2000,
    зарлага: 9800,
  },
  {
    name: '4 сар',
    орлого: 2780,
    зарлага: 3908,
  },
  {
    name: '5 сар',
    орлого: 1890,
    зарлага: 4800,
  },
  {
    name: '6 сар',
    орлого: 2390,
    зарлага: 3800,
  },
  {
    name: '7 сар',
    орлого: 3490,
    зарлага: 4300,
  },
  {
    name: '8 сар',
    орлого: 3490,
    зарлага: 4300,
  },
  {
    name: '9 сар',
    орлого: 3490,
    зарлага: 4300,
  },
  {
    name: '10 сар',
    орлого: 3490,
    зарлага: 4300,
  },
  {
    name: '11 сар',
    орлого: 3490,
    зарлага: 4300,
  },
  {
    name: '12 сар',
    орлого: 3490,
    зарлага: 4300,
  },
];
const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Санхүү</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop:"10px", paddingBottom:"30px"}}/>
          <Line type="monotone" dataKey="орлого" stroke="#C3EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="зарлага" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
            </div>
  )
}

export default FinanceChart