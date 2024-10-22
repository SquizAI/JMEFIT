import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ChevronDown,
  ChevronUp,
  Star,
  Calendar,
  Clock,
  User,
  Dumbbell,
  Target,
  Utensils,
} from "lucide-react";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-purple-600">
            jMe Fit
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-800 hover:text-purple-600">
              About
            </a>
            <a href="#services" className="text-gray-800 hover:text-purple-600">
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-purple-600"
            >
              Testimonials
            </a>
            <a href="#blog" className="text-gray-800 hover:text-purple-600">
              Blog
            </a>
            <a href="#contact" className="text-gray-800 hover:text-purple-600">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <a
            href="#about"
            className="block py-2 px-4 text-sm hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#services"
            className="block py-2 px-4 text-sm hover:bg-gray-100"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="block py-2 px-4 text-sm hover:bg-gray-100"
          >
            Testimonials
          </a>
          <a href="#blog" className="block py-2 px-4 text-sm hover:bg-gray-100">
            Blog
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-sm hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => (
  <section id="home" className="h-screen relative overflow-hidden">
    <video
      autoPlay
      loop
      muted
      className="absolute w-full h-full object-cover"
      style={{ filter: "brightness(0.7)" }}
    >
      <source
        src="https://video.wixstatic.com/video/f01d6f_baf2b68536b64a8882e875283de81900/720p/mp4/file.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="text-center text-white z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-shadow animate-fadeIn">
          JAIME THARPE
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-shadow animate-slideIn">
          Transform Your Body, Elevate Your Life
        </p>
        <a
          href="#contact"
          className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 animate-bounce"
        >
          Start Your Fitness Journey
        </a>
      </div>
    </div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Jaime Tharpe"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">
            About Jaime
          </h2>
          <p className="text-lg mb-6">
            As a certified personal trainer and nutritionist with over a decade
            of experience, I've dedicated my life to helping people transform
            their bodies and minds through fitness. My journey began with my own
            transformation, and now I'm passionate about guiding others to
            discover their strength, both inside and out.
          </p>
          <p className="text-lg mb-6">
            My approach combines cutting-edge training techniques with
            personalized nutrition plans, ensuring that each client receives a
            program tailored to their unique goals and lifestyle. Whether you're
            looking to lose weight, build muscle, or improve your overall
            health, I'm here to support you every step of the way.
          </p>
          <a
            href="#contact"
            className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Service Card Component
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="text-purple-600 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Services Section
const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Personal Training"
          description="One-on-one sessions tailored to your specific fitness goals, whether it's weight loss, muscle gain, or overall health improvement."
          icon={<User size={48} />}
        />
        <ServiceCard
          title="Nutrition Coaching"
          description="Personalized meal plans and nutrition advice to fuel your workouts and support your fitness journey."
          icon={<Calendar size={48} />}
        />
        <ServiceCard
          title="Online Coaching"
          description="Flexible, remote training programs that fit your schedule, with regular check-ins and adjustments."
          icon={<Clock size={48} />}
        />
      </div>
    </div>
  </section>
);

// Coaching Packages Section
const CoachingPackages = () => {
  const packages = [
    {
      name: "SHRED Plan",
      description:
        "A 6-week beginner to advanced program including workout plans, meal plans, and regular coaching sessions.",
      price: "$189 (one-time)",
      icon: <Dumbbell size={48} className="mx-auto mb-4 text-purple-600" />,
    },
    {
      name: "Nutrition Plan",
      description:
        "Personalized meal plan tailored for your fitness journey, with ongoing monthly support.",
      price: "$149/month",
      icon: <Utensils size={48} className="mx-auto mb-4 text-purple-600" />,
    },
    {
      name: "Nutrition + Workouts Plan",
      description:
      "A comprehensive plan combining personalized nutrition and structured workouts for optimal results.",
    price: "$199/month",
    icon: <Target size={48} className="mx-auto mb-4 text-purple-600" />,
  },
];

return (
  <section id="coaching" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
        Coaching Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105"
          >
            {pkg.icon}
            <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <p className="text-3xl font-bold text-purple-600">{pkg.price}</p>
            <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

// Transformations Section
const Transformations = () => (
<section id="transformations" className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
      Real Client Transformations
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src="client1-before-after.jpg"
          alt="Client 1 transformation"
          className="w-full h-auto rounded-md mb-4"
        />
        <p className="text-xl font-semibold mb-2">Sarah J.</p>
        <p className="text-gray-600">
          "I lost 10 lbs and feel stronger than ever! Thank you, Jaime!"
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src="client2-before-after.jpg"
          alt="Client 2 transformation"
          className="w-full h-auto rounded-md mb-4"
        />
        <p className="text-xl font-semibold mb-2">Mike P.</p>
        <p className="text-gray-600">
          "Best decision of my life. I built muscle and got back in shape."
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src="client3-before-after.jpg"
          alt="Client 3 transformation"
          className="w-full h-auto rounded-md mb-4"
        />
        <p className="text-xl font-semibold mb-2">Emily R.</p>
        <p className="text-gray-600">
          "The accountability kept me going. I lost 7 lbs in just 6 weeks!"
        </p>
      </div>
    </div>
  </div>
</section>
);

// FAQ Section
const FAQ = () => (
<section id="faq" className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
      Frequently Asked Questions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Do I get a meal plan?</h3>
        <p className="text-gray-600">
          Yes, each program includes a personalized meal plan tailored to your goals.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">How long are the programs?</h3>
        <p className="text-gray-600">
          The SHRED Plan is a 6-week program, while the Nutrition and Nutrition + Workouts Plans are ongoing, billed monthly.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Can I combine programs?</h3>
        <p className="text-gray-600">
          Absolutely! You can combine different plans to suit your fitness journey.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Is the SHRED Plan suitable for beginners?</h3>
        <p className="text-gray-600">
          Yes! The SHRED Plan is designed for all levels, including beginners.
        </p>
      </div>
    </div>
  </div>
</section>
);

// Testimonials Section
const Testimonials = () => {
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Jaime's program completely transformed my approach to fitness. I've lost 30 pounds and feel stronger than ever!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Peterson",
    text: "The personalized nutrition plan was a game-changer. Jaime's guidance helped me achieve my muscle gain goals.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "As a busy mom, Jaime's online coaching has been perfect for me. I can workout on my schedule and still get amazing results.",
    rating: 5,
  },
];

const [currentIndex, setCurrentIndex] = useState(0);

return (
  <section id="testimonials" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
        Client Transformation Stories
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl mb-4 italic">
            "{testimonials[currentIndex].text}"
          </p>
          <div className="flex items-center justify-between">
            <p className="font-semibold">{testimonials[currentIndex].name}</p>
            <div className="flex">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} fill="#9333EA" color="#9333EA" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            <ChevronUp size={24} />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </div>
  </section>
);
};

// Blog Section
const BlogPost = ({ title, excerpt, image }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="text-purple-600 font-semibold hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
  
  const Blog = () => (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
          Fitness Tips & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogPost
            title="5 Essential Exercises for Core Strength"
            excerpt="Discover the key movements that will help you build a strong and stable core, improving your overall fitness and posture."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <BlogPost
            title="Nutrition Tips for Muscle Gain"
            excerpt="Learn about the best foods and eating habits to support muscle growth and recovery, maximizing your strength training efforts."
            image="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <BlogPost
            title="The Benefits of High-Intensity Interval Training"
            excerpt="Explore how HIIT can revolutionize your workout routine, helping you burn fat and improve cardiovascular health in less time."
            image="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
      </div>
    </section>
  );
  
  
  // Contact Section
  const Contact = () => {
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormState({ ...formState, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formState);
      // Form submission logic here
    };
  
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  // Footer Section
  const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Jaime Tharpe Fitness</h3>
            <p>
              Empowering you to achieve your fitness goals and transform your life
              through expert guidance and personalized programs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-purple-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-purple-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-purple-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <p>Email: jaime@jaimetharpefit.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Fitness St, Healthville, TX 12345</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/jme_tharpe_fit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Jaime Tharpe Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
  
  // Main HomePage Component
  const HomePage = () => {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <CoachingPackages />
        <Transformations />
        <FAQ />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  };
  
  export default HomePage;
  