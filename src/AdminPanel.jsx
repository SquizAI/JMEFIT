// AdminPanel.js (Enhanced with Basic Authentication)
import React, { useState } from "react";

const AdminPanel = ({ content, onUpdate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editingSection, setEditingSection] = useState(null);
  const [editedContent, setEditedContent] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with real authentication logic
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleEdit = (section) => {
    setEditingSection(section);
    setEditedContent(content[section]);
  };

  const handleSave = () => {
    onUpdate(editingSection, editedContent);
    setEditingSection(null);
  };

  const renderEditForm = () => {
    // Same as before...
    // (Refer to the original AdminPanel code for form rendering)
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-lg w-80"
        >
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="space-y-4">
        {/* Same edit buttons as before */}
        <button
          onClick={() => handleEdit("coachingPackages")}
          className="bg-purple-600 text-white py-2 px-4 rounded"
        >
          Edit Coaching Packages
        </button>
        {/* Add more edit buttons as needed */}
      </div>
      {editingSection && (
        <div className="mt-4">
          {/* Render edit form */}
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
  );
};

export default AdminPanel;
