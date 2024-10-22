import React from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import TestimonialsCarousel from "./TestimonialsCarousel";

const PersonalTraining = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-purple-600">
        Premium Personal Training Tailored Just for You
      </h2>

      {/* Introduction with Video */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <iframe
            src="https://www.youtube.com/embed/your-promo-video-id"
            title="Personal Training Promo"
            className="w-full h-64 rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <p className="text-lg mb-6">
            Achieve your fitness goals faster with one-on-one personalized
            training sessions. Our highly tailored programs are built with your
            lifestyle, goals, and fitness level in mind, ensuring you see real,
            sustainable results.
          </p>
          <p className="text-lg mb-6">
            Whether you're aiming to lose weight, build muscle, or simply stay
            in shape, Jaime will craft the perfect workout plan for you and
            provide the motivation you need to reach your full potential.
          </p>
          <a
            href="/checkout/personal-training"
            className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Start Personal Training
          </a>
        </div>
      </div>

      {/* Before and After Image Slider */}
      <div className="mb-16">
        <h3 className="text-4xl font-bold text-center mb-8 text-purple-600">
          Real Client Transformations
        </h3>
        <BeforeAfterSlider
          beforeImage="/images/client1-before.jpg"
          afterImage="/images/client1-after.jpg"
          description="Sarah's incredible transformation over 12 weeks"
        />
      </div>

      {/* Client Testimonials */}
      <TestimonialsCarousel
        testimonials={[
          {
            name: "John Doe",
            text: "Jaime's training helped me achieve results I never thought possible.",
          },
          {
            name: "Jane Smith",
            text: "I lost 10 lbs in 8 weeks with this incredible program.",
          },
        ]}
      />

      {/* FAQ Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-purple-600">
          Personal Training FAQ
        </h3>
        <div className="mt-6">
          <h4 className="text-2xl font-semibold">
            How often do I get sessions?
          </h4>
          <p className="text-gray-600">
            You can opt for up to 3 weekly sessions based on your availability
            and goals.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-2xl font-semibold">
            Are the sessions in-person or virtual?
          </h4>
          <p className="text-gray-600">
            You can choose between virtual training or in-person sessions
            depending on your location and preferences.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-2xl font-semibold">
            Is the plan customized to my needs?
          </h4>
          <p className="text-gray-600">
            Absolutely. Each plan is designed based on your unique goals,
            lifestyle, and fitness level.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PersonalTraining;
