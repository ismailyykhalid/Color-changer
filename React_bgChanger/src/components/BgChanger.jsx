import React, { useState } from 'react';

const BgChanger = () => {
  const [color, setColor] = useState('white');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-end items-center gap-4 p-4' style={{backgroundColor : color}}>
        <button
          onClick={() => changeColor('white')}
          className='bg-white text-black rounded-full px-6 py-3'
        >
          White
        </button>
        <div className='flex gap-4'>
          <button
            onClick={() => changeColor('grey')}
            className='bg-gray-500 text-white rounded-full px-6 py-3'
          >
            Grey
          </button>
          <button
            onClick={() => changeColor('blue')}
            className='bg-blue-500 text-white rounded-full px-6 py-3'
          >
            Blue
          </button>
          <button
            onClick={() => changeColor('green')}
            className='bg-green-500 text-white rounded-full px-6 py-3'
          >
            Green
          </button>
          <button
            onClick={() => changeColor('orange')}
            className='bg-orange-500 text-white rounded-full px-6 py-3'
          >
            Orange
          </button>
          <button
            onClick={() => changeColor('purple')}
            className='bg-purple-500 text-white rounded-full px-6 py-3'
          >
            Purple
          </button>
        </div>
      </div>
    </>
  );
};

export default BgChanger;
