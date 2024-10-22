import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPage = ({ content, onUpdate }) => {
  const [editingSection, setEditingSection] = useState(null);
  const [editedContent, setEditedContent] = useState({});

  const handleEdit = (section) => {
    setEditingSection(section);
    setEditedContent(content[section]);
  };

  const handleSave = () => {
    onUpdate(editingSection, editedContent);
    setEditingSection(null);
  };

  const renderEditForm = () => {
    if (!editingSection) return null;

    switch (editingSection) {
      case "coachingPackages":
        return (
          <div>
            {editedContent.map((pkg, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={pkg.name}
                  onChange={(e) => {
                    const newPackages = [...editedContent];
                    newPackages[index].name = e.target.value;
                    setEditedContent(newPackages);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  value={pkg.description}
                  onChange={(e) => {
                    const newPackages = [...editedContent];
                    newPackages[index].description = e.target.value;
                    setEditedContent(newPackages);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  value={pkg.price}
                  onChange={(e) => {
                    const newPackages = [...editedContent];
                    newPackages[index].price = e.target.value;
                    setEditedContent(newPackages);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
              </div>
            ))}
          </div>
        );
      case "fitnessChallenges":
        return (
          <div>
            {editedContent.map((challenge, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={challenge.name}
                  onChange={(e) => {
                    const newChallenges = [...editedContent];
                    newChallenges[index].name = e.target.value;
                    setEditedContent(newChallenges);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  value={challenge.description}
                  onChange={(e) => {
                    const newChallenges = [...editedContent];
                    newChallenges[index].description = e.target.value;
                    setEditedContent(newChallenges);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
              </div>
            ))}
          </div>
        );
      case "featuredRecipes":
        return (
          <div>
            {editedContent.map((recipe, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={recipe.name}
                  onChange={(e) => {
                    const newRecipes = [...editedContent];
                    newRecipes[index].name = e.target.value;
                    setEditedContent(newRecipes);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  value={recipe.type}
                  onChange={(e) => {
                    const newRecipes = [...editedContent];
                    newRecipes[index].type = e.target.value;
                    setEditedContent(newRecipes);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
              </div>
            ))}
          </div>
        );
      case "quickSnacks":
        return (
          <div>
            {editedContent.map((snack, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={snack}
                  onChange={(e) => {
                    const newSnacks = [...editedContent];
                    newSnacks[index] = e.target.value;
                    setEditedContent(newSnacks);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <Link
        to="/"
        className="text-purple-600 hover:underline mb-4 inline-block"
      >
        Back to Homepage
      </Link>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <button
            onClick={() => handleEdit("coachingPackages")}
            className="bg-purple-600 text-white py-2 px-4 rounded"
          >
            Edit Coaching Packages
          </button>
          <button
            onClick={() => handleEdit("fitnessChallenges")}
            className="bg-purple-600 text-white py-2 px-4 rounded"
          >
            Edit Fitness Challenges
          </button>
          <button
            onClick={() => handleEdit("featuredRecipes")}
            className="bg-purple-600 text-white py-2 px-4 rounded"
          >
            Edit Featured Recipes
          </button>
          <button
            onClick={() => handleEdit("quickSnacks")}
            className="bg-purple-600 text-white py-2 px-4 rounded"
          >
            Edit Quick Snacks
          </button>
        </div>
        {editingSection && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">
              Editing {editingSection}
            </h3>
            {renderEditForm()}
            <button
              onClick={handleSave}
              className="bg-green-500 text-white py-2 px-4 rounded mt-4"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
