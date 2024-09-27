"use client";
import React, { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";

const QuoteForm = () => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [seats, setSeats] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ destination, duration, seats, startDate });
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className=" relative bg-white w-[50%] h-[100px] rounded-lg shadow-md p-4 flex items-center space-x-4 justify-center   mt-[-2%]"
      >
        <div className="relative">
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled selected>
              Destination
            </option>
            {/* Add destination options here */}
          </select>
          <ChevronDown
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="relative">
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled selected>
              Duration
            </option>
            {/* Add duration options here */}
          </select>
          <ChevronDown
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="relative">
          <select
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled selected>
              Seats
            </option>
            {/* Add seat options here */}
          </select>
          <ChevronDown
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="relative">
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start Date"
            className="bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Calendar
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
