import React from "react";
import { Rocket } from "lucide-react";


const Footer = () => {
  return (
    <footer className="fixed bottom-0 cursor-default left-0 w-full bg-gray-900 text-gray-300 py-6 shadow-inner z-50 border-t border-gray-700">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">
          Built and Produced By
        </p>
        <div className="flex  align-middle items-center  justify-center space-x-2">
        <h2 className="text-xl font-bold text-white">CodeKnightxDevs</h2>
        <Rocket size={24} color="red" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
