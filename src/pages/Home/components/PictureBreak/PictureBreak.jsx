import React from 'react'

export default function PictureBreak() {
  return (
    <div className="h-[60vh] bg-cover bg-bottom bg-no-repeat flex items-center justify-center"
         style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDN8fGNoZWZ8ZW58MXx8fHwxNjk0MTE0MzAxfDA&ixlib=rb-4.0.3&q=80&w=1000)' }}>
      <div className="flex flex-col justify-start items-center h-[50%] p-4 space-y-4">
        <h1 className="text-8xl font-semibold tracking-wider text-white">The Kitchen</h1>
      </div>
    </div>
  )
}
