import React from 'react';
import { Link } from 'react-router-dom';

export default function FirstStepMenu() {
  const boxesContent = [
    {
      imageUrl: "https://images.unsplash.com/photo-1624633431700-b0912297c13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxtdXNocm9vbSUyMGZvb2R8ZW58MXx8fHwxNjk0MDMyNTk3fDA&ixlib=rb-4.0.3&q=80&w=1000",
      title: "Box 1",
      description: "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero a pharetra."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDZ8fG11c2hyb29tJTIwZm9vZHxlbnwxfHx8fDE2OTQwMzI1OTd8MA&ixlib=rb-4.0.3&q=80&w=1000",
      title: "Box 2",
      description: "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534352211968-8d25dbe0e951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDU4fHxtdXNocm9vbSUyMGZvb2R8ZW58MXx8fHwxNjk0MDMyNTk3fDA&ixlib=rb-4.0.3&q=80&w=1000",
      title: "Box 3",
      description: "Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit luctus sem adipiscing elit."
    }
  ];

  return (
    <div className="py-20 md:p-10"> 
      <div className="py-20 px-6 md:px-20 lg:px-60 space-y-20"> {/* adjusted padding for smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {boxesContent.map((box, index) => (
            <div key={index} className=" relative w-full max-w-[500px] mx-auto"> {/* changed to max-width and w-full */}
              <div className="relative w-full pb-[56.25%]"> {/* Adjusted for a 16:9 aspect ratio */}
                <img src={box.imageUrl} alt={box.description} className="absolute top-0 left-0 w-full h-full object-cover" />
              </div>
              <h3 className="text-xl mt-4">{box.title}</h3>
              <p className='mt-5 tracking-wide leading-8'>{box.description}</p>
            </div>
          ))}
        </div>
        <Link to="/menu">
            <button className="mt-40 px-20 py-6 border-2 border-[#131524] rounded-full bg-transparent hover:bg-[#131524] hover:text-white transition-colors duration-300 block mx-auto">
                View Menu
            </button>
        </Link>
      </div>
    </div>
  );
  
}