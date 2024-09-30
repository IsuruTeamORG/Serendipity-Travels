"use client";

import React, { useState } from "react";
import { TourCardDetails } from "../data/TourCardDetails";
import TourCard from "../components/TourCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const TourCardGrid: React.FC = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TourCardDetails.length / itemsPerPage);

  const currentItems = TourCardDetails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="container mx-auto px-4 py-8 max-md:py-2">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold leading-tight text-left text-[#004643] mb-8 max-md:mb-4 font-playfair max-md:text-xl"
      >
        Best Package For 2024
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-4 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-2"
      >
        {currentItems.map((product: any) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <TourCard data={product} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center items-center mt-10">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-red-50"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                number === currentPage
                  ? "z-10 bg-red-500 border-red-500 text-white"
                  : "bg-white border-gray-300 text-gray-500 hover:bg-red-50"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-red-50"
          >
            <span className="sr-only">Next</span>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TourCardGrid;
