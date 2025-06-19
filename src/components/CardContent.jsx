import React from 'react'
import {
 CalendarRange } from 'lucide-react';
function CardContent() {
  return (
    <>
      <div className='justify-between items-center flex w-full m-2 gap-10'>
                        <span className='text-white jutsify-around flex'>
                              <input type='checkbox' className='border border-gray-300  rounded-md' placeholder='Search Brand Kits' />
                        <span className='text-light flex items-center'>
                            <img
                            src="logo.webp"
                            class="img-fluid rounded-top"
                            alt=""
                            height={30}
                            width={50}
                        />Ecorp</span></span>
                        <span >
                        <CalendarRange /></span>
                    </div>
    </>
  )
}

export default CardContent