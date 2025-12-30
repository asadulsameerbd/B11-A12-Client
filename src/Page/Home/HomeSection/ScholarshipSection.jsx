import axios from "axios";
import React, { useEffect, useState } from "react";

const ScholarshipSection = () => {
  const [scholarships, setScholarships] = useState([]);
  useEffect(() => {
    axios
      .get("/Scholarship.json")
      .then((res) => setScholarships(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(scholarships);
  return (
    <div>
      {/* upper content */}
      <h1 className="text-2xl md:text-4xl font-bold text-center pt-5 pb-5">
        Featured <span className="text-yellow-400">Scholarships</span>
      </h1>
      <p className="text-lg text-center text-gray-500 font-kalam pb-5">
        Discover top scholarship opportunities handpicked for ambitious students
        like you.
      </p>

      {/* divider  */}
      <div className="flex justify-center mb-15">
        <svg
          width="120"
          height="20"
          viewBox="0 0 120 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10 C15 0, 30 0, 45 10
             C60 20, 75 20, 90 10
             C105 0, 120 0, 120 10"
            fill="none"
            stroke="#facc15"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="lg:w-7xl lg:mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scholarships.map((scholarship) => (
          <div className="card mx-4 lg:mx-0 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge bg-[#012131] text-white p-2 badge-xs badge-warning">
                {scholarship.scholarshipCategory}
              </span>
              <div className="flex justify-between">
                <img src={scholarship.universityLogo} alt="" />
                <h2 className="text-sm md:text-xl text-gray-500 font-bold">
                  {scholarship.universityName}
                </h2>
                <span className="md:text-xl">$29/mo</span>
              </div>

              <div className="mt-6">
                <button className="btn btn-soft bg-amber-400 hover:scale-102 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipSection;
