import React from 'react';

export default function BottomPhoto() {
    return (
        <div className="py-20 md:p-5"> 
            <div className="py-10 px-6 md:px-20 lg:px-60"> 
                <img 
                    src="https://images.unsplash.com/photo-1604328471151-b52226907017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE3fHxjaGVmfGVufDF8fHx8MTY5NDExNDMwMXww&ixlib=rb-4.0.3&q=80&w=1000" 
                    alt="Description" 
                    className="w-full max-w-[1548px] mx-auto block object-cover h-[500px]" 
                />
            </div>
        </div>
    );
}
