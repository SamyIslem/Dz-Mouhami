// LawyerSettings.js
import React, { useState } from 'react';

const LawyerSettings = () => {
  // Initial state for form fields
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the updated password to the server for verification and update

    // For demonstration purposes, log the data to the console
    console.log('New Password Data:', formData);

    // Reset the form after submission
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>

      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Current Password:
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 w-full mt-1"
            required
          />
        </label>

        <label className="block mb-4">
          New Password:
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 w-full mt-1"
            required
          />
        </label>

        <label className="block mb-6">
          Confirm New Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 w-full mt-1"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default LawyerSettings;
