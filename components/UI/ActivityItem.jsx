import React from 'react';  
import Image from 'next/image';
// import mc from '@/icons/index'

const ActivityItem = ({ allActivity }) => {

  return (
    <>
    {allActivity.map((data) => (
        <div className="flex flex-col pb-2 ">
            <div className='w-15'>{data.date} </div>
            <div className='flex justify-between gap-5'>
                <div className='flex items-center gap-1'>
                  <div className='w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center '>
                  <Image 
                    src={`/${data.category}.png`}
                    width={30}
                    height={30}
                  />
                  </div>
                  <div className='min-w-16 truncate'>{data.name}</div>
                </div>
                <div className='flex items-center'>
                    {data.expence ? <h1 className='text-red-600'>-{data.amount}</h1> : <h1 className='text-green-600'>+{data.amount}</h1>}
                    <div className='w-15'></div>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default ActivityItem