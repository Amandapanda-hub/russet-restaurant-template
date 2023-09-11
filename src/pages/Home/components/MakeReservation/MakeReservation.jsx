import React from 'react';
import { Link } from 'react-router-dom';

export default function MakeReservation() {
  return (
    <div 
      className=" h-[80vh] bg-cover bg-bottom bg-no-repeat flex flex-col items-center justify-center space-y-4 sm:space-y-8 lg:space-y-20 p-4"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDc2fHxyZXN0YXVyYW50fGVufDF8fHx8MTY5NDAzNTE2MXww&ixlib=rb-4.0.3&q=80&w=1000)' }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">A Seat Awaits You</h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white shadow-md">
        Experience the magic where every dish is a conversation.
      </p>
      <div className="flex items-center justify-center w-full">
        <Link 
          to='/reservation' 
          className="text-sm sm:text-base px-4 sm:px-6 py-1 sm:py-6 border-2 border-white text-white rounded-full bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
        >
          Make a Reservation
        </Link>
      </div>
    </div>
  );
}
