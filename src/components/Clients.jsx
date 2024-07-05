import React from 'react'

function Clients() {
  return (
    <div>
      <div className='p-10 bg-gray-300'>
          <div className='flex justify-center text-3xl  '>
            Our clients
          </div>
          <div className='flex flex-row py-10 px-20 space-x-4'>
            <div className='bg-white rounded-lg basis-1/4 p-20 flex justify-center'>
              <img src='/img/i1.png'/>
            </div>
            <div className='bg-white rounded-lg basis-1/4 p-20 flex justify-center'>
              <img src='/img/i2.png'/>
            </div>
            <div className='bg-white rounded-lg basis-1/4 p-20 flex justify-center'>
              <img src='/img/i3.png'/>
            </div>
            <div className='bg-white rounded-lg basis-1/4 p-20 flex justify-center'>
              <img src='/img/i4.png'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Clients
