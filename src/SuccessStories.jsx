// SuccessStories.js
import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Sarah Johnson",
      photo: "https://via.placeholder.com/150",
      story: "Jaime helped me lose 30 pounds and gain confidence!",
    },
    {
      id: 2,
      name: "Mike Peterson",
      photo: "https://via.placeholder.com/150",
      story:
        "Thanks to Jaime's nutrition plan, I built muscle and improved my health.",
    },
    // Add more stories as needed
  ];

  return (
    <section id="success-stories" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={story.photo}
                alt={story.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-center">
                {story.name}
              </h3>
              <p className="text-gray-600 text-center">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
