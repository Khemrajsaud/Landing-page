import React from "react";
import "./crousal.css"


const CrousalLogo = () => {
    const items = [
  "kailali Nation Academy",
  "Indxo AI",
   "Empower International",
  "Bright Future",
  "Electrono",
  "Nata Academy",
 
  
];
  return (
    
<div>
     <div className="flex items-center gap-4 mb-4 ml-10">
            <div className="h-px w-10 bg-black"></div>

            <p className="text-xs  tracking-widest text-gray-500 uppercase whitespace-nowrap">
          Collaborating with Excellence
            </p>

            <div className="h-px w-10 bg-black"></div>
          </div>
    
    <div className="carousel-container">
  <div className="carousel-track">
    {items.map((name, index) => (
      <div key={index} className="card">
        {name}
      </div>
    ))}

    {/* duplicate for infinite scroll */}
    {items.map((name, index) => (
      <div key={index} className="card" >
        {name}
      </div>
    ))}
  </div>
</div>
</div>
  );


}
export default CrousalLogo;
