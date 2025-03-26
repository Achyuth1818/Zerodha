import React from "react";
import Education from "./Education";
import Stats from "./Stats";

const EducationStats = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:mx-[12%] md:justify-between">
        <div className="text-start">
          <Education />
        </div>
        <div className="md:my-auto">
          <Stats />
        </div>
      </div>
    </>
  );
};

export default EducationStats;
