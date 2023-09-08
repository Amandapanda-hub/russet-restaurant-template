import React from 'react';

export default function LocationsContactForm() {
  return (
    <div className="container mx-auto mt-10 p-4 sm:p-20 text-black">
      <div className="max-w-screen-lg mx-auto w-full sm:w-3/4 md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left container with H2 and P elements */}
        <div className="flex flex-col space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Title 1</h2>
            <p className="mt-2">Description 1</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Title 2</h2>
            <p className="mt-2">Description 2</p>
          </div>
        </div>

        {/* Right container with form */}
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="First Name" 
                className="p-2 border rounded"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="p-2 border rounded"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 border rounded"
            />
            <textarea 
              placeholder="Message" 
              className="w-full p-2 border rounded h-32"
            ></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
              Send
            </button>
          </form>
        </div>

      </div>
      </div>
    </div>
  )
}
