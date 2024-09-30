"use client";
import { useState } from "react";
import { ChevronDownIcon, CalendarIcon } from "lucide-react";

export default function TravelBooking() {
  const [startDate, setStartDate] = useState("");

  return (
    <div className="flex justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center
      justify-center z-20 w-full max-w-4xl">
        {/* Destination Select */}
        <div className="relative w-full md:w-auto">
          <select className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Destination</option>
            {/* Add destination options here */}
          </select>
          <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Duration Select */}
        <div className="relative w-full md:w-auto">
          <select className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Duration</option>
            {/* Add duration options here */}
          </select>
          <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Seats Select */}
        <div className="relative w-full md:w-auto">
          <select className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Seats</option>
            {/* Add seat options here */}
          </select>
          <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Start Date Input */}
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <CalendarIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Get Quote Button */}
        <button className="w-full md:w-auto bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Get Quote
        </button>
      </div>
    </div>
  );
}
