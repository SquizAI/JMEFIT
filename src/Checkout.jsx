import React, { useState } from "react";

const Checkout = ({ service }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Payment processing logic here
    alert(`Thank you for signing up for the ${service} package!`);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
          Checkout - {service} Package
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-lg mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={formState.cardNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="expirationDate" className="block text-lg mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              value={formState.expirationDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-lg mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={formState.cvv}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Complete Payment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
