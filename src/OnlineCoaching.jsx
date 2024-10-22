import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const OnlineCoaching = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-12 text-blue-600">
        Online Coaching
      </h2>
      <p className="text-lg text-center mb-6">
        Get fit from anywhere with our flexible online coaching options. Whether
        you prefer home workouts or gym routines, we’ve got you covered with
        personalized plans.
      </p>

      <TestimonialsCarousel />

      <div className="mt-12">
        <h3 className="text-3xl font-bold text-blue-600">FAQ</h3>
        <div className="mt-6">
          <h4 className="text-2xl font-semibold">
            What’s included in online coaching?
          </h4>
          <p className="text-gray-600">
            You’ll receive personalized workout plans, regular check-ins, and
            video tutorials.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-2xl font-semibold">How often do we check in?</h4>
          <p className="text-gray-600">
            We do weekly video calls and daily messaging to track your progress.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="/checkout/online-coaching"
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Sign Up for Online Coaching
        </a>
      </div>
    </div>
  </section>
);

export default OnlineCoaching;
