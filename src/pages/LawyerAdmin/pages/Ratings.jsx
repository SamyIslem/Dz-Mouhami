// LawyerReviewPage.js

import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import avatar from '../../../assets/lawyer/useravatar.png';
const LawyerReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      userName: 'Client1',
      date: '2022-01-01',
      stars: 4,
      comment: 'Great service! Very satisfied.',
      avatar : avatar
    },
    {
      id: 2,
      userName: 'Client2',
      date: '2022-01-05',
      stars: 5,
      comment: 'Highly recommended. Excellent communication.',
      avatar : avatar
    },
    // Add more reviews as needed
  ]);

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Calculate average rating when reviews change
    const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
    const newAverageRating = totalStars / reviews.length || 0;
    setAverageRating(newAverageRating);
  }, [reviews]);

  const handleDeleteReview = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen  ">
      <h1 className="text-2xl font-bold mb-4">Client Ratings</h1>

      <div className="mb-4">
        <p className="text-lg font-semibold mb-2">Average Rating:</p>
        <StarRatings
          rating={averageRating}
          starRatedColor="orange"
          starEmptyColor="gray"
          numberOfStars={5}
          name="average-rating"
          starDimension="30px"
          starSpacing="2px"
        />
        
        <span className="text-gray-600 ml-2">{averageRating.toFixed(2)}</span>
      </div>

      {reviews.map((review) => (
        <div key={review.id} className="border p-4 mb-4 bg-white rounded-md">
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className='flex gap-3 items-center justify-center'>
              <img src={review.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
              <h2 className="text-xl font-semibold">{review.userName}</h2>
              
              </div>
              
              <p className="text-gray-500">{review.date}</p>
            </div>
 
          <button
                        onClick={() => handleDeleteReview(review.id)}
                  className=" hover:text-bg-red-600 text-[#e44c4c] font-bold py-2 px-4 rounded mt-2 cursor-pointer"
                >
                  <DeleteOutlineTwoToneIcon/>
                </button>
          </div>
          <p className="text-gray-800">{review.comment}</p>
          <StarRatings
              rating={review.stars}
              starRatedColor="orange"
              starEmptyColor="gray"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="2px"
            />
        </div>
      ))}
    </div>
  );
};

export default LawyerReviewPage;
