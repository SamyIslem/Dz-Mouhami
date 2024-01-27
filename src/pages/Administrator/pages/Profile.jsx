// LawyerProfile.js
import React, { useState } from 'react';
import avatar from "../../../assets/lawyer/useravatar.png";
const Profile = () => {
  // Initial lawyer information state
  const [lawyerInfo, setLawyerInfo] = useState({
    name: 'Wahid Slimani',
    avatar: avatar,
    speciality: 'Family Law',
    overview: 'Experienced lawyer specializing in family law cases.',
    address: '123 Law Street, Cityville, USA',
    phone: '123-456-7890',
    email: 'wslimani@estin.dz',
    website: 'https://app.diagrams.net/',
    googleMapsIframe: '<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLawyerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
    // Handle avatar input change
    const handleAvatarChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setLawyerInfo((prevInfo) => ({ ...prevInfo, avatar: e.target.result }));
        };
        reader.readAsDataURL(file);
      }
    };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the modified lawyerInfo (e.g., send to server)
    console.log('Lawyer information updated:', lawyerInfo);
  };

  return (
    <div className=" mx-auto p-4 bg-white rounded shadow-md mt-8  flex gap-6">
      
      <div className="mb-4 flex flex-col   p-6">
        
        <label className="cursor-pointer">
          <img src={lawyerInfo.avatar} alt="Lawyer Avatar" className=" w-24 h-24 rounded-full" />
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </label>
        <h2 className="text-xl font-semibold mt-2">{lawyerInfo.name}</h2>
        <p className="text-gray-600 mb-2">Speciality: {lawyerInfo.speciality}</p>
        <p className="text-gray-700">{lawyerInfo.overview}</p>
        <p className="text-gray-700 mt-2">Address: {lawyerInfo.address}</p>
        <p className="text-gray-700 mt-2">Phone: {lawyerInfo.phone}</p>
        <p className="text-gray-700 mt-2">Email: {lawyerInfo.email}</p>
        <a href={lawyerInfo.website} className="text-gray-700 mt-2">Website: <span>{lawyerInfo.website}</span></a>
        

        <div
          dangerouslySetInnerHTML={{ __html: lawyerInfo.googleMapsIframe }}
          className="mt-4 "
        />
      </div>
      <form onSubmit={handleSubmit} className='flex w-full h-full  justify-between  p-12 flex-1'>
        <div className="">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={lawyerInfo.name}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Speciality:
          <input
            type="text"
            name="speciality"
            value={lawyerInfo.speciality}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Overview:
          <textarea
            name="overview"
            value={lawyerInfo.overview}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Address:
          <input
            type="text"
            name="address"
            value={lawyerInfo.address}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>

        </div>
<div className=" ">
<label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={lawyerInfo.email}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Phone:
          <input
            type="text"
            name="phone"
            value={lawyerInfo.phone}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Website:
          <input
            type="text"
            name="website"
            value={lawyerInfo.website}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Google Maps Iframe:
          <textarea
            name="googleMapsIframe"
            value={lawyerInfo.googleMapsIframe}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "
        >
          Save Changes
        </button>
</div>


      </form>
    </div>
  );
};

export default Profile;
