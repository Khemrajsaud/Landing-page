// import React from 'react'
// import ScrollVelocity from "../utils/ScrollVelocity.jsx";

// const ValocitText = () => {
//   return (
//     <div>


//       <ScrollVelocity
     
//   texts={['React Bits', 'Scroll Down']} 
//   velocity={100}
//   className="custom-scroll-text "
//       />
//     </div>
//   )
// }

// export default ValocitText

import ScrollVelocity from "../utils/ScrollVelocity.jsx";

const ValocitText = () => {
  return (
    <div className="overflow-hidden">
      <ScrollVelocity
        texts={["Your Brain Our Tech on Future"]}
        velocity={100}
        className="custom-scroll-text text-gray-400 font-light   italic text-6xl"
        numCopies={8}
      />
    </div>
  );
};

export default ValocitText;
