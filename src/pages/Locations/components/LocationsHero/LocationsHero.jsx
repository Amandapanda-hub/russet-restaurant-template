import React from 'react'

export default function LocationsHero() {
  return (
    <div 
    className="h-[60vh] sm:h-[70vh] md:h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 sm:p-8"
    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1624633431700-b0912297c13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxtdXNocm9vbSUyMGZvb2R8ZW58MXx8fHwxNjk0MDMyNTk3fDA&ixlib=rb-4.0.3&q=80&w=1000)' }}
  >
    <div className="text-center text-white">
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase mb-4">Locations</h1>
    </div>
  </div>
  )
}
