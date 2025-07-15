'use client';
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiLayoutGridFill } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState({});

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div
      className={`w-1/6 bg-transparent text-white border-r border-borderColor sticky left-0 top-0 h-screen transition-all duration-300 flex flex-col p-4 overflow-y-auto`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-4">
        {!isCollapsed && 
          <h2 className="flex items-center justify-between gap-2 text-md font-semibold">
            <img className='w-8' src='./EgrisIcon.png' alt='img'/>
            Egris Auth
          </h2>
        }
      </div>

      {/* Sidebar Menu */}
      <nav>
        {/* Getting started */}
        <div>
          <div>
            <p className="text-gray-400 text-xs mb-2">Getting started</p>
          </div>
          <button className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md">
            <HiOutlineDocumentText className="mr-3" /> {!isCollapsed && "Documentation"}
          </button>
          <button className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md">
            <FiSettings className="mr-3" /> {!isCollapsed && "Settings"}
          </button>
        </div>
      
        {/* Quick references */}
        <div className="mt-4">
          <div>
            <p className="text-gray-400 text-xs mb-2">Quick references</p>
            <div>
              <button
                className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md"
                onClick={() => toggleSection("playground")}
              >
                <RiLayoutGridFill className="mr-3" /> {!isCollapsed && "Create Short Link"}
                {!isCollapsed && (openSections.playground ? <FaAngleDown className="ml-auto" /> : <FaAngleRight className="ml-auto" />)}
              </button>
              {openSections.playground && !isCollapsed && (
                <div className="ml-6 space-y-1">
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Simple link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Dynamic link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">A/B testing link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Media file link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Qr code</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Semi Hosted */}
        <div className="mt-4">
          <div>
            <p className="text-gray-400 text-xs mb-2">Semi Hosted</p>
            <div>
              <button
                className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md"
                onClick={() => toggleSection("playground")}
              >
                <RiLayoutGridFill className="mr-3" /> {!isCollapsed && "Create Short Link"}
                {!isCollapsed && (openSections.playground ? <FaAngleDown className="ml-auto" /> : <FaAngleRight className="ml-auto" />)}
              </button>
              {openSections.playground && !isCollapsed && (
                <div className="ml-6 space-y-1">
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Simple link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Dynamic link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">A/B testing link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Media file link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Qr code</p>
                </div>
              )}
            </div>
          </div>
          <button className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md">
            <HiOutlineDocumentText className="mr-3" /> {!isCollapsed && "Documentation"}
          </button>
          <button className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md">
            <FiSettings className="mr-3" /> {!isCollapsed && "Settings"}
          </button>
        </div>

        {/* Fully Hosted */}
        <div className="mt-4">
          <div>
            <p className="text-gray-400 text-xs mb-2">Fully Hosted</p>
            <div>
              <button
                className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md"
                onClick={() => toggleSection("playground")}
              >
                <RiLayoutGridFill className="mr-3" /> {!isCollapsed && "Create Short Link"}
                {!isCollapsed && (openSections.playground ? <FaAngleDown className="ml-auto" /> : <FaAngleRight className="ml-auto" />)}
              </button>
              {openSections.playground && !isCollapsed && (
                <div className="ml-6 space-y-1">
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Simple link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Dynamic link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">A/B testing link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Media file link</p>
                  <p className="py-1 text-white-400 text-sm pl-3 mr-6 rounded-md hover:bg-red-700">Qr code</p>
                </div>
              )}
            </div>
          </div>
          <button className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md">
            <HiOutlineDocumentText className="mr-3" /> {!isCollapsed && "Documentation"}
          </button>
          <button className="flex items-center text-sm w-full py-2 px-3 hover:bg-red-700 rounded-md">
            <FiSettings className="mr-3" /> {!isCollapsed && "Settings"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
