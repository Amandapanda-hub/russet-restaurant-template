import React from 'react';

export default function KitchenInsight() {
    const boxesContent = [
        {
            title: "Chef Alaric Belmonte",
            miniTitle: "Executive Chef",
            description: "Having trained under culinary masters in Tuscany, Chef Alaric brings a fusion of traditional Mediterranean flavors and modern techniques. His dedication to organic, locally-sourced ingredients ensures every dish tells a story. A culinary artist and a storyteller, Alaric's creations are a feast for the senses."
        },
        {
            title: "Chef Lysandra Moon",
            miniTitle: "Pastry Chef",
            description: "With a passion for sweet creations, Chef Lysandra has been captivating our diners with her innovative desserts. Drawing inspiration from her travels across Asia, she skillfully integrates exotic flavors into classic Western pastries. Every dessert under her touch turns into a delightful surprise."
        },
        {
            title: "Chef Rowan Fox",
            miniTitle: "Sous Chef",
            description: "As the backbone of our kitchen, Chef Rowan ensures everything runs smoothly. He's an expert in creating bold, flavor-packed sauces and believes in the magic of fresh herbs. Under his watchful eye, every ingredient is treated with respect, ensuring the essence of every dish is perfectly captured."
        }
    ];
    
    return (
        <div className="py-20 md:p-10"> 
            <div className="py-20 px-6 md:px-20 lg:px-60 space-y-20"> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {boxesContent.map((box, index) => (
                        <div key={index} className="relative w-full max-w-[500px] mx-auto">
                            <div className="relative w-full"></div>
                            <h2 className='text-xl font-bold'>{box.title}</h2>
                            <h3 className="text-lg mt-4 font-semibold">{box.miniTitle}</h3>
                            <p className='text-md mt-5 tracking-wide leading-8'>{box.description}</p>
                        </div>
                    ))}
                </div>
              
                {/* <div className="mt-20">
                    <img 
                        src="https://images.unsplash.com/photo-1604328471151-b52226907017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE3fHxjaGVmfGVufDF8fHx8MTY5NDExNDMwMXww&ixlib=rb-4.0.3&q=80&w=1000" 
                        alt="Description" 
                        className="w-full max-w-[800px] mx-auto" 
                    />
                </div> */}
            </div>
            
        </div>
    );
}
