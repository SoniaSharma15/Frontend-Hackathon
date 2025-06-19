import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const Caraousel = () => {
    const [imgSrc1, setImgSrc1] = useState('1.avif');
      const [imgSrc2, setImgSrc2] = useState('3.jpg');
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* img Image Block */}
      <div
        className="relative w-full h-full group"
        onMouseEnter={() => setImgSrc1('2.jpeg')}
        onMouseLeave={() => setImgSrc1('1.avif')}
      >
        <img
          src={imgSrc1}
          className="w-full h-full object-cover"
          alt="Hover to change"
        />
         <button className="p-5  absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black px-4 py-2 rounded w-[75%] transition-opacity duration-300 flex gap-2">
      <span className="flex-1 text-center">Add to Bag</span>
 <Plus color="black" strokeWidth={2} />
        </button>
      </div>

      {/* img2 Image Block */}
      <div
        className="relative w-full h-full group"
         onMouseEnter={() => setImgSrc2('4.jpeg')}
        onMouseLeave={() => setImgSrc2('3.jpg')}
      >
        <img
          src={imgSrc2}
          className="w-full h-full object-cover"
          alt="Hover to change"
        />
        <button className="p-5  absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black px-4 py-2 rounded w-[75%] transition-opacity duration-300 flex gap-2">
      <span className="flex-1 text-center">Add to Bag</span>
 <Plus color="black" strokeWidth={2} />
        </button>
      </div>
      </div>
  )
}

export default Caraousel