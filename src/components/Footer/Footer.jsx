import React from 'react';
import footerData from '../../data/footerData';


export default function Footer() {
  return (
    <div className='bg-[#131524] text-white py-20'>
      <div className='max-w-screen-lg mx-auto w-full sm:w-3/4 md:w-2/3 text-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-40'>
          {footerData.map((column, index) => (
            <div key={index} className='space-y-6'>
              {column.header ? (
                <h3 className='font-semibold text-lg mb-4'>{column.header}</h3>
              ) : (
                <div className="font-semibold mb-4 justify-center flex space-x-4 text-2xl">
                  {column.info[0].type === 'icons' &&
                    column.info[0].content.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} />
                    ))
                  }
                </div>
              )}
              
              {column.info.map((item, i) => {
                if (typeof item === 'object' && item.type !== 'icons') {
                  switch (item.type) {
                    case 'link':
                      return (
                        <div key={i}>
                          <a href={item.url} className="underline hover:text-">{item.text}</a>
                        </div>
                      );
                    default:
                      return null;
                  }
                } else if (typeof item === 'string' && item.includes(',')) {
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
