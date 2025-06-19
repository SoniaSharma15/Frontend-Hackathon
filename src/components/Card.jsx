import React from 'react'

 import CardContent from './CardContent';

const Card = () => {
    return (
        <div className='flex  border-3 border-b-red-500 border-r-yellow-500 border-t-pink-500 border-l-purple-500 bg-black rounded-lg shadow-lg p-4 m-4 w-75  text-white'>
            <div className='items-center justify-center flex-col w-full'>
                <h2 className='font-bold mx-3'>Brand Kits</h2>
                <div className='flex flex-col'>        
                <CardContent></CardContent>
                <CardContent></CardContent>
                <CardContent></CardContent>
                </div>
            </div>
        </div>
    )
}

export default Card