import React from 'react';
import menuData from '../../../../data/menuData';

export default function Menu() {
  return (
    <div className="p-4 md:py-40 ">
      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h1 className="font-bold text-4xl text-center my-20 tracking-widest">{category}</h1>
          <div className="flex justify-center"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16 md:gap-x-8 w-full md:max-w-6xl">
              {items.map((item, index) => (
                <div key={index} className=" p-2">
                  <div className="flex justify-between">
                    <span className='text-xl font-bold'>{item.name}</span>
                    <span className='text-xl'>{item.price}</span>
                  </div>
                  <p className="mt-2 text-lg font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
