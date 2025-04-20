import { useState } from "react";
import { toast } from "react-hot-toast";

const Form4 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (step === 1 && !formData.name) {
      toast.error("Please enter your name.");
    } else if (step === 2 && (!formData.address || !formData.city || !formData.zip)) {
      toast.error("Please fill all address fields.");
    } else {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    toast.success("Form submitted successfully!");
    console.log("Submitted Data:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
    });
    setStep(1); // Reset to step 1 after submission
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Awesome Registration Form</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div>
            <div>
              <label htmlFor="name" className="block text-lg text-white">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-lg text-white">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="block text-lg text-white">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="(123) 456-7890"
                required
              />
            </div>
          </div>
        )}

        {/* Step 2: Address Info */}
        {step === 2 && (
          <div>
            <div>
              <label htmlFor="address" className="block text-lg text-white">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="123 Main St"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="city" className="block text-lg text-white">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="New York"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="zip" className="block text-lg text-white">Zip Code</label>
              <input
                type="text"
                name="zip"
                id="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="10001"
                required
              />
            </div>
          </div>
        )}

        {/* Step 3: Summary */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold text-white">Summary</h3>
            <ul className="text-white mt-4 space-y-2">
              <li>Name: <strong>{formData.name}</strong></li>
              <li>Email: <strong>{formData.email}</strong></li>
              <li>Phone: <strong>{formData.phone}</strong></li>
              <li>Address: <strong>{formData.address}, {formData.city}, {formData.zip}</strong></li>
            </ul>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-teal-500 text-white py-3 px-8 rounded-lg hover:bg-teal-600 transition-all"
              >
                Submit Form
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step !== 3 && (
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              className={`bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all ${step === 1 && "hidden"}`}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition-all"
            >
              {step === 2 ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form4;
export const form4Code = `
<form className="space-y-6">
  <div className="flex flex-col">
    <label htmlFor="name" className="font-medium">Name</label>
    <input
      type="text"
      id="name"
      className="bg-gray-200 text-black py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      required
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="email" className="font-medium">Email</label>
    <input
      type="email"
      id="email"
      className="bg-gray-200 text-black py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      required
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="message" className="font-medium">Message</label>
    <textarea
      id="message"
      className="bg-gray-200 text-black py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      required
    ></textarea>
  </div>

  <div className="flex justify-between items-center">
    <button
      type="button"
      className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
      /* addDollerSingHere{step === 1 ? "hidden" : ""} */
    >
      Previous
    </button>

    <button
      type="submit"
      className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all"
    >
      Next
    </button>
  </div>
</form>
`;



