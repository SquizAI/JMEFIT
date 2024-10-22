import React from "react";

const FAQ = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Do I get a meal plan?</h3>
          <p className="text-gray-600">
            Yes, each program includes a personalized meal plan tailored to your
            goals.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            How long are the programs?
          </h3>
          <p className="text-gray-600">
            The SHRED Plan is a 6-week program, while the Nutrition and
            Nutrition + Workouts Plans are ongoing, billed monthly.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Can I combine programs?
          </h3>
          <p className="text-gray-600">
            Absolutely! You can combine different plans to suit your fitness
            journey.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Is the SHRED Plan suitable for beginners?
          </h3>
          <p className="text-gray-600">
            Yes! The SHRED Plan is designed for all levels, including beginners.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
