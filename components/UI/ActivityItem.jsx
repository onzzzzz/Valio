import React from 'react';  
import Image from 'next/image';
// import mc from '@/icons/index'

const ActivityItem = ({ allActivity }) => {

  return (
    <>
    {allActivity.map((data) => (
        <div className="flex flex-col px-4 pb-3 ">
          <div className='w-15'>{ (new Date(data.date)).toLocaleDateString() }</div>
          <div className='flex justify-between '>
            <div className='flex items-center gap-1'>
              <div className={`w-10 h-10 rounded-lg center bg-earthy-background `} >
                <Image 
                  src={`/${data.category}.png`}
                  width={30}
                  height={30}
                />
              </div>
              <div className='min-w-16 truncate'>{data.name}</div>
            </div>
            <div className='flex flex-row items-center '>
              {data.expence ? <h1 className='text-semantic-red text-nowrap'>-{ (data.amount).toFixed(2) } €</h1> : <h1 className='text-green text-nowrap'>+{ (data.amount).toFixed(2) } €</h1>}
            </div>
          </div>
        </div>
    ))}
    </>
  )
}

export default ActivityItem