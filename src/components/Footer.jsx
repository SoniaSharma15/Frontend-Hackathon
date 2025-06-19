import React, { useState, useEffect } from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const [index, setIndex] = useState(false);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setIndex(prev => !prev), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative bg-black w-full h-[25vh] flex justify-between items-center text-white overflow-hidden"
      onMouseEnter={() => setBlur(true)}
      onMouseLeave={() => setBlur(false)}
    >
      {/* Blurred background content */}
      <div className={`flex w-full justify-evenly transition duration-300 ${blur ? 'blur-sm' : ''}`}>
        {(index ? Array(3).fill(<Facebook size={25} strokeWidth={1.5} />
) : Array(3).fill(<Instagram size={25} strokeWidth={1.5} />
)).map((label, i) => (
          <div key={i} className="flex flex-col m-6 p-4 gap-[70px]">
            <span>{label}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Centered button overlay */}
      {blur && (
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
          Meet our Customers
        </button>
      )}
    </div>
  );
};

export default Footer;