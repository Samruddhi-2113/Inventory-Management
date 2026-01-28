import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaTruck,
  FaBox,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center bg-gray-800 text-white p-4">
        <button onClick={() => setIsOpen(true)}>
          <FaBars size={22} />
        </button>
        <h2 className="ml-4 text-lg font-semibold">Shanti Hardware</h2>
      </div>

      {/* Overlay (Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gray-800 text-white p-6 space-y-6 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative md:z-0`}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center md:hidden">
          <h2 className="text-xl font-bold">Shanti Hardware</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Desktop Title */}
        <h2 className="hidden md:block text-2xl font-bold text-center">
          Shanti Hardware
        </h2>

        <ul className="space-y-4 mt-6">
          <SidebarLink to="/" icon={<FaHome />} text="Dashboard" />
          <SidebarLink to="/inventory" icon={<FaBox />} text="Inventory" />
          <SidebarLink to="/suppliers" icon={<FaTruck />} text="Supplier" />
          <SidebarLink to="/orders" icon={<FaClipboardList />} text="Order" />
          <SidebarLink to="/profile" icon={<FaUser />} text="Profile" />
          <SidebarLink to="/login" icon={<FaSignInAlt />} text="Login" />
          <SidebarLink to="/register" icon={<FaUserPlus />} text="Register" />
        </ul>
      </div>
    </>
  );
};

const SidebarLink = ({ to, icon, text }) => (
  <li>
    <Link
      to={to}
      className="flex items-center space-x-3 hover:text-blue-400 transition"
    >
      {icon}
      <span>{text}</span>
    </Link>
  </li>
);

export default Sidebar;
