import React from 'react'

const ServiceCard = ( { icon, title, desc }) => {
  return (
    <div
      className="
        group bg-white rounded-2xl p-8 border border-gray-100
        transition-all duration-300
        hover:bg-black hover:shadow-2xl hover:-translate-y-2
      "
    >
      {/* Icon */}
      <div
        className="
          w-12 h-12 rounded-xl bg-gray-100
          flex items-center justify-center
          text-gray-900 mb-6
          transition-all duration-300
          group-hover:bg-white/10 group-hover:text-white
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h4
        className="
          text-xl font-semibold text-gray-900 mb-3
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {title}
      </h4>

      {/* Description */}
      <p
        className="
          text-gray-500 text-sm leading-relaxed
          transition-colors duration-300
          group-hover:text-gray-300
        "
      >
        {desc}
      </p>
    </div>
  )
}

export default ServiceCard