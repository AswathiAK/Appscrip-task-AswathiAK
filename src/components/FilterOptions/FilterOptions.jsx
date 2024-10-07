import { useState } from "react";
import "./FilterOptions.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const FilterOptions = () => {
  const filterSegments = [
    {
      title: "Ideal For",
      subsegments: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "Occasion",
      subsegments: ["Party", "Casual", "Wedding"],
    },
    {
      title: "Work",
      subsegments: ["Office", "Freelance", "Remote"],
    },
    {
      title: "Fabric",
      subsegments: ["Cotton", "Ryon", "Nylon"],
    },
    {
      title: "Segment",
      subsegments: ["Formal", "Casual", "Sports"],
    },
    {
      title: "Suitable For",
      subsegments: ["Summer", "Winter", "All Season"],
    },
    {
      title: "Raw Materials",
      subsegments: ["Natural", "Synthetic", "Blends"],
    },
    {
      title: "Pattern",
      subsegments: ["Solid", "Striped", "Printed"],
    },
  ];

  const [openDropdown, setOpenDropdown] = useState([]);
  const handleToggle = (index) => {
    if (openDropdown.includes(index)) {
      setOpenDropdown(openDropdown.filter((i) => i !== index));
    } else {
      setOpenDropdown([...openDropdown, index]);
    }
  };

  const [selectedSubsegments, setSelectedSubsegments] = useState({});
  const handleCheckbox = (title, segment) => {
    setSelectedSubsegments((prev) => ({
      ...prev,
      [title]: {
        ...prev[title],
        [segment]: !prev[title]?.[segment],
      },
    }));
  };

  return (
    <div className="filter">
      <div className="custom-segment">
        <input type="checkbox" className="checkbox" />
        <p className="filter-title">Customizable</p>
      </div>
      <div className="border"></div>

      {filterSegments.map((filter, index) => (
        <div key={index}>
          <div className="filter-section">
            <div
              className="filter-dropdown"
              onClick={() => handleToggle(index)}
            >
              <p className="filter-title">{filter.title}</p>
              {openDropdown.includes(index) ? (
                <MdKeyboardArrowUp className="icon" />
              ) : (
                <MdKeyboardArrowDown className="icon" />
              )}
            </div>
            <p className="filter-select">All</p>
          </div>
          {/* Dropdown segments */}
          {openDropdown.includes(index) && (
            <div className="">
              {filter.subsegments.map((segment, index) => (
                <div className="subsegment" key={index}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={
                      selectedSubsegments[filter.title]?.[segment] || false
                    }
                    onChange={() => handleCheckbox(filter.title, segment)}
                  />
                  <label className="subsegment-title">{segment}</label>
                </div>
              ))}
            </div>
          )}
          <div className="border"></div>
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
