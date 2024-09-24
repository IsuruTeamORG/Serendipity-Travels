"use client";
import { div } from "framer-motion/client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    gender: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    country: "",
    gender: "",
    message: "",
  });

  const validate = () => {
    let newErrors = { name: "", country: "", gender: "", message: "" };
    let isValid = true;

    // Regex patterns
    const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
    const countryPattern = /^[A-Za-z\s]+$/; // Only letters and spaces
    const genderPattern = /^(Male|Female|Other)$/; // Acceptable gender options

    if (!namePattern.test(formData.name)) {
      newErrors.name = "Name must only contain letters and spaces.";
      isValid = false;
    }
    if (!countryPattern.test(formData.country)) {
      newErrors.country = "Country must only contain letters and spaces.";
      isValid = false;
    }
    if (!genderPattern.test(formData.gender)) {
      newErrors.gender = "Gender must be Male, Female, or Other.";
      isValid = false;
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error message on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-[460px] h-[560px] mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-5"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="gender"
            placeholder="Gender (Male, Female, Other)"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.gender ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>
        <div className="mb-4 ">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message ? "border-red-500" : "border-gray-300"
            } resize-none`}
            rows={6}
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <div className="pt-14">
          <button
            type="submit"
            className="w-[35%] bg-blue-500 text-white py-5 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        I have read and accept the{" "}
        <a href="#" className="text-blue-500 hover:underline">
          privacy policy
        </a>
      </p>
    </div>
  );
};

export default ContactForm;
