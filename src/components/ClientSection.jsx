import React, { useEffect, useState } from "react";

const stats = [
  { label: "Happy Clients", value: 2452 },
  { label: "Kind Of Dairy", value: 162 },
  { label: "Years Of Experience", value: 15 },
  { label: "Team Members", value: 72 },
];

export default function Clientection() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((count, index) =>
          count < stats[index].value ? count + 1 : count
        )
      );
    }, 20); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#c2141b] text-white py-16 px-5 mb-15 mt-15">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-10">Our Achievements</h1>

     
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-5xl font-bold">{counters[index]}+</p>
              <p className="text-lg mt-2 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
