import React from 'react'

export default function Hero() {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
         style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1624633431700-b0912297c13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxtdXNocm9vbSUyMGZvb2R8ZW58MXx8fHwxNjk0MDMyNTk3fDA&ixlib=rb-4.0.3&q=80&w=1000)' }}>
      <div className="text-center text-white">
        <h1 className="text-7xl font-bold mb-4">Nourishing Nature's Best</h1>
        <h2 className="text-3xl capitalize">Voted worlds best natural food eatery</h2>
      </div>
    </div>
  )
}
