import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 to-purple-800 text-white p-10 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold mb-4">Let's Connect!</h3>
      <p className="text-lg text-gray-200 text-center mb-8">
        Reach out to us anytime, and let's build something amazing together.
      </p>

      <div className="space-y-6">
        {[
          { icon: <FaPhoneAlt />, text: "+123 456 7890" },
          { icon: <FaEnvelope />, text: "contact@example.com" },
          { icon: <FaMapMarkerAlt />, text: "123 Street, City, Country" },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-4 text-lg">
            <span className="bg-white/20 p-3 rounded-full text-xl">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
