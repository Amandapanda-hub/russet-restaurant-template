import React from 'react';

export default function MakeReservation() {
  return (
    <div className="h-[80vh] bg-cover bg-bottom bg-no-repeat flex flex-col items-center justify-center space-y-20"
         style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDc2fHxyZXN0YXVyYW50fGVufDF8fHx8MTY5NDAzNTE2MXww&ixlib=rb-4.0.3&q=80&w=1000)' }}>
      <h1 className="text-5xl font-bold mb-4 text-white">A Seat Awaits You</h1>
      <p className="text-xl mb-4 text-white" style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.8)' }}>Experience the magic where every dish is a conversation.</p>
      <button className="px-6 py-2 border-2 border-white text-white rounded-full bg-transparent hover:bg-white hover:text-black transition-colors duration-300">
        Make a Reservation
      </button>
    </div>
  );
}
