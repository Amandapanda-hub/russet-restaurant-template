import React from 'react';

export default function LocationsContactForm() {
  return (
    <div className="container mx-auto my-40 p-4 sm:p-20 text-black">
      <div className="max-w-screen-lg mx-auto w-full sm:w-3/4 md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left container with H2 and P elements */}
          <div className="flex flex-col space-y-20">
            <div>
              <h2 className="text-xl font-semibold uppercase">PUBLIC RELATIONS</h2>
              <p className="mt-2">(555) 555-5555</p>
              <p className="mt-2">email@example.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold uppercase">PUBLIC RELATIONS</h2>
              <p className="mt-2">(555) 555-5555</p>
              <p className="mt-2">email@example.com</p>
            </div>
          </div>

          {/* Right container with form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold mb-2">First Name</label>
                  <input 
                    id="firstName"
                    type="text" 
                    placeholder="" 
                    className="p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold mb-2">Last Name</label>
                  <input 
                    id="lastName"
                    type="text" 
                    placeholder="" 
                    className="p-2 border rounded"
                  />
                </div>
              </div>
              
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="" 
                className="w-full p-2 border rounded"
              />
              
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea 
                id="message"
                placeholder="" 
                className="w-full p-2 border rounded h-32"
              ></textarea>
              
              <button className="mt-40 px-6 py-2 border-2 border-[#131524] rounded-full bg-transparent hover:bg-[#131524] hover:text-white transition-colors duration-300 block mx-auto">
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
