import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import NutritionGuidePreview from "./NutritionGuidePreview";

const NutritionCoaching = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-green-600">
        Personalized Nutrition Coaching
      </h2>

      {/* Introduction */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/nutrition-coaching.jpg"
            alt="Nutrition Coaching"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <p className="text-lg mb-6">
            Our Nutrition Coaching program is designed to fit your unique
            dietary preferences and goals. Whether you're looking to lose
            weight, build muscle, or adopt healthier eating habits, we'll
            provide you with a meal plan that suits your lifestyle.
          </p>
          <p className="text-lg mb-6">
            Get access to a personalized meal plan, grocery lists, and weekly
            adjustments based on your progress. With ongoing support, we’ll keep
            you accountable and help you stay on track.
          </p>
          <a
            href="/checkout/nutrition-coaching"
            className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Get Your Personalized Plan
          </a>
        </div>
      </div>

      {/* Preview Nutrition Guide */}
      <NutritionGuidePreview
        guideImage="/images/nutrition-guide-preview.jpg"
        guideDescription="Preview our comprehensive meal plan guide, tailored to your needs"
      />

      {/* Testimonials */}
      <TestimonialsCarousel
        testimonials={[
          {
            name: "Alice Brown",
            text: "The personalized meal plans helped me lose 15 lbs in 3 months, while still enjoying the foods I love.",
          },
          {
            name: "Mike Daniels",
            text: "The accountability and weekly adjustments kept me motivated and on track with my goals.",
          },
        ]}
      />

      {/* Nutrition Coaching FAQ */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-green-600">
          Nutrition Coaching FAQ
        </h3>
        <div className="mt-6">
          <h4 className="text-2xl font-semibold">
            Can I customize the meal plan based on my diet?
          </h4>
          <p className="text-gray-600">
            Yes! We create meal plans for all types of diets, including vegan,
            paleo, keto, and gluten-free options.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-2xl font-semibold">
            Will I receive grocery lists?
          </h4>
          <p className="text-gray-600">
            Absolutely. You'll get a complete grocery list with every update to
            ensure you have everything you need.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default NutritionCoaching;
