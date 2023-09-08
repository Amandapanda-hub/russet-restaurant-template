import React from 'react';
import footerData from '../../../../data/footerData';

export default function LocationsRow() {
  return (
    <div className=' text-black my-40 py-20'>
      <div className='max-w-screen-lg mx-auto w-full sm:w-3/4 md:w-2/3 text-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40'>
          {footerData.slice(0, 3).map((column, index) => (
            <div key={index} className='space-y-6'>
              <h1 className='font-semibold text-lg mb-4'>{column.header}</h1>
              
              {column.info.map((item, i) => {
                if (typeof item === 'string' && item.includes(',')) {
                  const [street, ...cityStateZipParts] = item.split(','); 
                  const cityStateZip = cityStateZipParts.join(',').trim();
                  return (
                    <div key={i} className="space-y-1">
                      <p>{street.trim()}</p>
                      <p>{cityStateZip}</p>
                    </div>
                  );
                } else if (typeof item === 'string') {
                  return <p key={i}>{item}</p>;
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
