import { useState } from "react";
import { toast } from "react-hot-toast";

const Form3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      toast.error("Please accept the terms.");
      return;
    }
    toast.success("Form submitted!");
    console.log("Submitted Data:", formData);
    setFormData({ name: "", phone: "", service: "", agree: false });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-3xl bg-gradient-to-br from-white to-gray-100 dark:from-[#1a1a1a] dark:to-[#111] shadow-2xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Request a Callback
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <input
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Service Dropdown */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Service Required
          </label>
          <select
            name="service"
            id="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          >
            <option value="">Select a service</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="seo">SEO & Marketing</option>
          </select>
        </div>

        {/* Agree Checkbox */}
        <div className="flex items-center gap-3">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={formData.agree}
            onChange={handleChange}
            className="accent-blue-500 w-5 h-5"
          />
          <label htmlFor="agree" className="text-sm text-gray-700 dark:text-gray-300">
            I agree to the <a href="#" className="underline text-blue-500">terms & conditions</a>.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Form3;

export const form3Code = `
import { useState } from "react";
import { toast } from "react-hot-toast";

const Form3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      toast.error("Please accept the terms.");
      return;
    }
    toast.success("Form submitted!");
    console.log("Submitted Data:", formData);
    setFormData({ name: "", phone: "", service: "", agree: false });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-3xl bg-gradient-to-br from-white to-gray-100 dark:from-[#1a1a1a] dark:to-[#111] shadow-2xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Request a Callback
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <input
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Service Dropdown */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Service Required
          </label>
          <select
            name="service"
            id="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          >
            <option value="">Select a service</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="seo">SEO & Marketing</option>
          </select>
        </div>

        {/* Agree Checkbox */}
        <div className="flex items-center gap-3">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={formData.agree}
            onChange={handleChange}
            className="accent-blue-500 w-5 h-5"
          />
          <label htmlFor="agree" className="text-sm text-gray-700 dark:text-gray-300">
            I agree to the <a href="#" className="underline text-blue-500">terms & conditions</a>.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Form3;
`;
