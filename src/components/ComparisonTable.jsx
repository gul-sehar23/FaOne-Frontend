import React from "react";

const ComparisonTable = () => {
  const products = [
    { name: "Fresh Milk", fat: "3.5%", protein: "8g", calcium: "300mg", organic: "✔️", shelf: "7 Days" },
    { name: "Full Cream Milk", fat: "6.0%", protein: "10g", calcium: "350mg", organic: "✔️", shelf: "10 Days" },
    { name: "UHT Milk", fat: "3.0%", protein: "9g", calcium: "320mg", organic: "❌", shelf: "6 Months" },
    { name: "Margarine Butter", fat: "80%", protein: "1g", calcium: "50mg", organic: "❌", shelf: "6 Months" },
    { name: "Butter Cream", fat: "35%", protein: "2g", calcium: "80mg", organic: "✔️", shelf: "2 Weeks" },
    { name: "Feta Cheese", fat: "20%", protein: "6g", calcium: "450mg", organic: "✔️", shelf: "2 Months" },
    { name: "Condensed Milk", fat: "8%", protein: "10g", calcium: "300mg", organic: "❌", shelf: "1 Year" },
    { name: "Gourmet Cream", fat: "40%", protein: "3g", calcium: "150mg", organic: "✔️", shelf: "3 Weeks" },
    { name: "Fresh Juices", fat: "0%", protein: "1g", calcium: "20mg", organic: "✔️", shelf: "7 Days" },
    { name: "Nuggets", fat: "12%", protein: "15g", calcium: "100mg", organic: "❌", shelf: "6 Months" },
    { name: "Frozen Parathas", fat: "10%", protein: "4g", calcium: "30mg", organic: "❌", shelf: "3 Months" },
    { name: "Frozen Meat", fat: "18%", protein: "20g", calcium: "120mg", organic: "✔️", shelf: "6 Months" },
    { name: "Fresh Eggs", fat: "5%", protein: "13g", calcium: "50mg", organic: "✔️", shelf: "3 Weeks" },
    { name: "Almond Milk", fat: "2%", protein: "5g", calcium: "250mg", organic: "✔️", shelf: "10 Days" },
    { name: "Soy Milk", fat: "3%", protein: "7g", calcium: "280mg", organic: "✔️", shelf: "12 Days" },
    { name: "Organic Fruits", fat: "0%", protein: "1g", calcium: "20mg", organic: "✔️", shelf: "1 Week" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-5xl font-bold text-center mb-6 text-gray-800" data-aos="fade-up">
        Compare Our Fresh & Frozen Products
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse bg-white rounded-lg">
          <thead className="bg-[#c2141b] text-white">
            <tr className="text-left text-sm">
              <th className="p-4 font-semibold">Product</th>
              <th className="p-4 font-semibold text-center">Fat Content</th>
              <th className="p-4 font-semibold text-center">Protein</th>
              <th className="p-4 font-semibold text-center">Calcium</th>
              <th className="p-4 font-semibold text-center">Organic</th>
              <th className="p-4 font-semibold text-center">Shelf Life</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className={`border-t text-gray-700 text-sm ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-center">{item.fat}</td>
                <td className="p-4 text-center">{item.protein}</td>
                <td className="p-4 text-center">{item.calcium}</td>
                <td className="p-4 text-center">{item.organic}</td>
                <td className="p-4 text-center">{item.shelf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
