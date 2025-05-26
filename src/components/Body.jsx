import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SignInForm, SignUpForm } from "./AuthForms";
import { Cog } from "lucide-react";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function Body({ onLogin }) {
  const [modal, setModal] = useState(null); // "signin", "signup", or null
  const navigate = useNavigate();

  return (
    <div className="pt-28 px-4 cursor-default flex flex-col items-center justify-center h-[calc(100vh-112px-96px)] text-center relative">
      <div className="flex items-center space-y-2">
         <Cog size={150} color="gray" className="animate-spin" />
       <h2 className="text-7xl  font-bold">Spare Part Management</h2>

       </div>
      <p className="text-2xl p-2 max-w-2xl mb-9 text-gray-600">
               Efficiently manage your inventory, track parts, and streamline operations all in one place.
      </p>
      <div className="flex space-x-12">
        <button
          onClick={() => setModal("signin")}
          className="bg-gray-900 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition text-base font-medium"
        >
          Sign In
        </button>
        <button
          onClick={() => setModal("signup")}
          className="bg-gray-900 text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-700 transition text-base font-medium"
        >
          Sign Up
        </button>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setModal(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              {modal === "signin" && (
                <SignInForm
                  onClose={() => setModal(null)}
                  switchToSignUp={() => setModal("signup")}
                  onLogin={(userData) => {
                    onLogin(userData);
                    setModal(null);
                    navigate("/hero");
                  }}
                />
              )}
              {modal === "signup" && (
                <SignUpForm
                  onClose={() => setModal(null)}
                  switchToSignIn={() => setModal("signin")}

                  onLogin={(userData) => {
                    onLogin(userData);
                    setModal(null);
                    navigate("/hero");
                  }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
