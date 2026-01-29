import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWritter = () => {
  return (
    <div>
        

         <TypeAnimation
      sequence={[
      
        'We Build',
        1000,
        'We Teach',
        1000,
        'We Envolv',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}

export default TypeWritter