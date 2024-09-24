import { Industry } from "lucide-react";

const Home = () => {
  const industries = [
    {
      title: "Advanced Manufacturing",
      description: "Small Description",
      icon: Industry,
    },
    {
      title: "Advanced Manufacturing",
      description: "Small Description",
      icon: Industry,
    },
    {
      title: "Advanced Manufacturing",
      description: "Small Description",
      icon: Industry,
    },
    {
      title: "Advanced Manufacturing",
      description: "Small Description",
      icon: Industry,
    },
    {
      title: "Advanced Manufacturing",
      description: "Small Description",
      icon: Industry,
    },
    {
      title: "Advanced Manufacturing",
      description: "Small Description",
      icon: Industry,
    },
    {
      title: "Advanced Manufacturing",
      description: "Small Description",
      icon: Industry,
    },
    {
      title: "Advanced Manufacturing",
      description: "Small Description",
      icon: Industry,
    },
  ];

  return (

      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="items-center justify-center text-center my-10">
          <p className="text-gray-500 text-base sm:text-lg">The Teams Member</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Industries We Help
          </h2>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-3 gap-5 justify-center items-center  space-y-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="w-[410px] h-[365px] bg-gray-100 rounded-md shadow-lg flex flex-col items-center p-4" // Added padding
            >
              {/* Top Icon with Lucide */}
              <div className="relative -mt-8 w-20 h-20 bg-teal-500 flex justify-center items-center rounded-md transition-transform duration-300 hover:bg-teal-600">
                {industry.icon}
              </div>

              {/* Content Box */}
              <div className="w-full h-[273px] text-center">
                <h3 className="text-lg font-semibold text-black transition-colors duration-300 hover:text-teal-600">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 transition-colors duration-300 hover:text-gray-700">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
 
  );
};

export default Home;
