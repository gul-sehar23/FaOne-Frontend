import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ali Khan",
    role: "Milk Production Manager",
    image: "https://i.dawn.com/primary/2020/03/5e6e81ffe133a.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sara Ahmed",
    role: "Nutrition Specialist",
    image: "https://exchange4media.gumlet.io/news-photo/98296-PARAG.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Hamza Raza",
    role: "Quality Assurance",
    image: "https://media.istockphoto.com/id/1149083014/photo/young-smiling-manager-in-sterile-uniform-holding-tablet-and-looking-at-camera-while-standing.jpg?s=612x612&w=0&k=20&c=4q4R7Vr7uBVEdA0L7ogdIUZZ6K-gtgTnoxtuSJMAPhM=",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 to-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-12">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-white shadow-lg rounded-xl overflow-hidden p-6 transition-all duration-300 hover:shadow-2xl">
              <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-[#ddb75e] transition-all duration-300 group-hover:scale-105">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900/70 via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <a href={member.socials.facebook} className="text-white text-2xl hover:text-[#ddb75e]">
                    <FaFacebook />
                  </a>
                  <a href={member.socials.twitter} className="text-white text-2xl hover:text-[#ddb75e]">
                    <FaTwitter />
                  </a>
                  <a href={member.socials.linkedin} className="text-white text-2xl hover:text-[#ddb75e]">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}