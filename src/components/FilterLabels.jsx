import React, { useState } from "react";

const FilterLabels = ({ filterLabels }) => {
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleFilter = (label) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((item) => item !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  return (
    <div className="flex space-x-2 ">
      {filterLabels.map((label) => (
        <label
          key={label}
          className={`flex space-x-2 ${
            selectedLabels.includes(label)
              ? "bg-red-500 text-white font-semibold rounded-xl p-2 m-2 border-2 border-red-500 cursor-pointer"
              : "bg-white text-black font-semibold rounded-xl p-2 m-2 border-2 border-gray-300 cursor-pointer"
          }`}
        >
          <input
            type="checkbox"
            checked={selectedLabels.includes(label)}
            onChange={() => handleFilter(label)}
            className="hidden"
          />
          {label}
        </label>
      ))}
    </div>
  );
};

export default FilterLabels;
