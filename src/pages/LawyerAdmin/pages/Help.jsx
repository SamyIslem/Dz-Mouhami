// LawyerHelp.js
import React, { useState } from 'react';

const LawyerHelp = () => {
  // Array of FAQs
  const faqs = [
    {
      question: 'How can I update my profile information?',
      answer: 'Navigate to the "Profile" page and click on the "Edit Profile" button to make changes.',
    },
    {
      question: 'How do I change my password?',
      answer: 'Go to the "Settings" page and use the "Change Password" section to update your password.',
    },
    // Add more FAQs as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Help Center</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded p-3">
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a1 1 0 01-.71-.29l-7-7a1 1 0 01-.24-1.09L4.11 4.7a1 1 0 011.47-1.4l5.3 5.29 5.3-5.3a1 1 0 011.47 1.41l-5.3 5.29a1 1 0 01-.76.18 1 1 0 01-.71-.29l-5-5A1 1 0 015.3 6.7L10 11.39l4.7-4.7a1 1 0 111.4 1.42l-5 5a1 1 0 01-.7.29z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {openIndex === index && (
                <div className="mt-2 pl-7 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
        <p className="text-gray-700">
          If you need further assistance or have specific inquiries, please contact our support team at{' '}
          <a href="mailto:support@example.com" className="text-blue-500">
            support@dzmohami.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LawyerHelp;
