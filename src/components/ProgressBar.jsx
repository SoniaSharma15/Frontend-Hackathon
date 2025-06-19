import React from 'react'

const ProgressBar = ({progress,year,value}) => {
  return (
    <div>
        <div className='flex flex-row mx-2 justify-between my-2'>
        <p>{year}</p>
        <p>{value}</p>
        </div>
    <div style={{ width: '100%', backgroundColor: '#eee', height: '10px', borderRadius: '5px' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor:  '#8B4513',
          transition: 'width 0.3s ease-in-out',
          borderRadius: '5px',
        }}
      /></div>
       </div>
  )
}

export default ProgressBar