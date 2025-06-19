import React from 'react'
import Card from './components/card'
import EmbodiedCarbonChart from './components/LineGraph'
import RippleCursor from './components/RippleCursor'    
import Footer from './components/Footer';
import Caraousel from './components/Caraousel';
import Stats from './components/Stats';
function App() {
  return (
    <>
    <h1 className='text-center text-5xl font-bold'>Frontend Battle</h1>

    <h3 className='mx-6 my-3 text-xl font-semibold'>Task 1: Ripple Effect on Cursor Movement</h3>
    <RippleCursor/>
    <h3 className='mx-6 my-3 text-xl font-semibold'>Task 2: Caraousel switch</h3>
            <Caraousel/> 
     <h3 className='mx-6 my-3 text-xl font-semibold'>Task 3: Graph</h3>
    <EmbodiedCarbonChart/>
    <h3 className='mx-6 my-3 text-xl font-semibold'>Task 4: Cards</h3>
    <center>    <Card/>
</center>
    <h3 className='mx-6 my-3 text-xl font-semibold'>Task 5:Stats </h3>
      <div className='grid grid-cols-1 items-center lg:grid-cols-3 p-10'>
      <Stats/>
      <Stats/>
      <Stats/>
      </div>
    <h3 className='mx-6 my-3 text-xl font-semibold'>Task 6:Customer section</h3>
      <Footer/> 
    </>
  )
}

export default App