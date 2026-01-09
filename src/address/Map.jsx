import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[250px] md:h-[300px] lg:h-[350px]">
      <iframe
        title="Lamki Kailali Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.4254681689254!2d81.14900187422275!3d28.627922784292295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a213e8d7eef0c3%3A0x3268a10939a09e8b!2sLamki%2C%20Kailali%2C%20Nepal!5e1!3m2!1sen!2snp!4v1767437751210!5m2!1sen!2snp"
        className="w-full h-full rounded-lg border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default Map;
