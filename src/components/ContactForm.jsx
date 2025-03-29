import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o4fjg8j",
        "",
        form.current,
        "1oFS9Gme_LN3tth6n"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.error("Failed to send email: ", error);
          alert("Message sending failed.");
        }
      );
  };

  return (
    <>
      
      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg flex items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#c2141b] text-white rounded-lg shadow-md text-2xl">
                <FaLocationDot />
              </div>
              <div className="ml-4">
                <h5 className="font-bold text-lg">Our Office Address</h5>
                <p className="text-gray-600 text-sm">
                  238 Lalazar Commercial Market Riwind Road Near Thokar NiazBaig Lahore
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg flex items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#c2141b] text-white rounded-lg shadow-md text-2xl">
                <FaPhone />
              </div>
              <div className="ml-4">
                <h5 className="font-bold text-lg">Call Us Anytime</h5>
                <p className="text-gray-600 text-sm">+923 458 662 825</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg flex items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#c2141b] text-white rounded-lg shadow-md text-2xl">
                <FaEnvelope />
              </div>
              <div className="ml-4">
                <h5 className="font-bold text-lg">Send An Email</h5>
                <p className="text-gray-600 text-sm">info@faonefoods.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 relative">
     
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/contact_bg_1.png')",
          }}
        ></div>

      
        <div className="container mx-auto relative">
          <h5 className="text-[#ddb75e] font-bold">CONTACT WITH US</h5>
          <h2 className="text-3xl font-bold">Have Any Questions?</h2>
          <p className="text-gray-600 mt-2">
            We’re here to help! Whether you’re looking for fresh dairy products, nutritious meals, <br /> inquiries about our services, feel free to reach out.
          </p>

         
          <div className="max-w-2xl mt-6 bg-white p-6 rounded-lg shadow-lg">
            <form ref={form} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="border rounded-lg p-3 w-full col-span-1"
                placeholder="Enter Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="border rounded-lg p-3 w-full col-span-1"
                placeholder="Enter Your Email"
                required
              />
              <input
                type="tel"
                name="phone"
                className="border rounded-lg p-3 w-full col-span-1 sm:col-span-2"
                placeholder="Phone Number"
                required
              />
              <textarea
                name="message"
                className="border rounded-lg p-3 w-full col-span-1 sm:col-span-2"
                rows="4"
                placeholder="Write Your Message"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#c2141b] font-bold text-white py-3 rounded-lg w-full col-span-1 sm:col-span-2 hover:bg-[#ddb75e] transition-all"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
