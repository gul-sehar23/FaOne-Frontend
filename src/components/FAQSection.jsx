import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { 
      question: "Are your milk products 100% organic?", 
      answer: "Yes! Our milk is sourced from organic farms with no artificial additives or preservatives, ensuring high-quality, pure dairy.", 
      delay: 200 
    },
    { 
      question: "How do you ensure the freshness of your meals?", 
      answer: "Our meals are freshly prepared every day and delivered in temperature-controlled packaging to maintain their taste and quality.", 
      delay: 400 
    },
    { 
      question: "Are there offices in other areas?", 
      answer: "Yes, we have multiple distribution centers, and we are expanding to new locations soon. Check our website for the latest updates!", 
      delay: 600 
    },
    { 
      question: "Are there any alternative payment options?", 
      answer: "Absolutely! We accept multiple payment methods, including cash on delivery, credit/debit cards, and digital wallets.", 
      delay: 800 
    },
    { 
      question: "Is there an offer for each transaction?", 
      answer: "We frequently offer discounts and special deals for our customers. Stay updated by following us on social media or subscribing to our newsletter.", 
      delay: 1000 
    },
    { 
      question: "What is meant by a step-by-step process?", 
      answer: "A step-by-step process ensures that customers can easily understand our ordering, delivery, and subscription methods without confusion.", 
      delay: 1200 
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center text-[#ddb75e]" data-aos="fade-up">
      CLIENTS QUESTIONS
      </h1>
      <p className="text-gray-600 mt-3 mb-10 text-center" data-aos="fade-up" data-aos-delay="100">
        Your queries about our fresh milk & meal services—answered here!  
      </p>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c2141b] cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => toggleFAQ(index)}
            data-aos="fade-up"
            data-aos-delay={faq.delay}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-[#15233e]">{faq.question}</h3>
              {openIndex === index ? (
                <FaMinusCircle className="text-[#c2141b] text-xl" />
              ) : (
                <FaPlusCircle className="text-gray-500 text-xl" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-3 transition-opacity duration-300 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
