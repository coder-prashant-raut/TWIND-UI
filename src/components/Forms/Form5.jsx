import React, { useState } from 'react';

const Form5 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    setIsSubmitted(true);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Contact Us</h2>
        
        {isSubmitted && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4 text-center">
            Thank you for your message!
          </div>
        )}

        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form5;


export const form5Code = `
<form className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto space-y-6">
  <h2 className="text-2xl font-semibold text-center text-gray-800">Contact Us</h2>
  
  <div className="flex flex-col space-y-4">
    <div>
      <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Your Full Name"
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
      <input
        type="email"
        id="email"
        className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Your Email Address"
        required
      />
    </div>

    <div>
      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Your Message"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
    >
      Send Message
    </button>
  </div>
</form>
`;

