"use client";
import { useState,useEffect, useRef } from "react";

const Dropdown = ({title,options,onSelect,DefaultSelected}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null || DefaultSelected);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Closes the dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm text-white shadow-sm ring-1 ring-inset ring-[#27272A] hover:shadow-[0px_0px_30px_rgba(255,58,58,0.5)] transition"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : title}
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute left-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-[#18181B] shadow-lg rounded-lg border border-[#27272A] ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 mx-2 text-sm text-white rounded-md hover:bg-[#474a4a]"
                role="menuitem"
                id="menu-item-0"
                onClick={()=> {setSelectedOption(option); setIsOpen(false); onSelect(option);}}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
