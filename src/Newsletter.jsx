// Newsletter.js
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with an email marketing service API like Mailchimp
    console.log("Newsletter subscription:", email);
    setStatus("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Updated!</h2>
        <p className="mb-8">
          Subscribe to our newsletter to receive the latest fitness tips and
          exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-1/3 p-3 rounded-l focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-r hover:bg-gray-200 transition duration-300"
          >
            Subscribe
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
