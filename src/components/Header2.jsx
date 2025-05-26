// src/components/Header.jsx
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import {Cog} from 'lucide-react';

const Header2 = ({ user }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="flex justify-between fixed top-0 w-full items-center px-8 py-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-md">
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-bold">Hi, {user.name}</h2>
        <Cog size={32} color="gray" />
        </div>
      <div className="relative">
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="cursor-pointer text-white text-4xl"
        >
          <FaUserCircle />
        </div>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded shadow-lg p-4 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <button
              className="mt-3 w-full bg-red-600 text-white py-1 rounded hover:bg-red-500 transition"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header2;
