import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserCog ,Eye} from 'lucide-react';
import { DiamondPlus, Hammer } from "lucide-react";
const Hero = () => {
  const navigate = useNavigate();

  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [showUseForm, setShowUseForm] = useState(false);

  const [addForm, setAddForm] = useState({
    title: "",
    description: "",
    category: "",
    productId: "",
  });

  const [useForm, setUseForm] = useState({
    productId: "",
    description: "",
    timestamp: new Date().toLocaleString(),
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log("Add Spare Part:", addForm);
    setShowAddForm(false);
  };

  const handleUseSubmit = (e) => {
    e.preventDefault();
    console.log("Use Spare Part:", useForm);
    setShowUseForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Body Layout */}
      <main className="flex md:flex-row flex-col cursor-default h-screen bg-gray-100 p-10 gap-6">
        {/* Left Side */}
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm h-[70vh] flex flex-col justify-start text-center">
            <UserCog size={100} color="grey" />
            <h1 className="text-5xl  font-bold mb-7 text-gray-800 text-center cursor-default self-start">
              Spare Part Management
            </h1>

            <p className="text-gray-600 p-3 leading-relaxed text-2xl w-full">
             “Effortlessly manage, track, and update all your spare parts in one smart system. Stay organized, minimize downtime, and always have the right parts ready when they’re needed most.”
            </p>
          </div>
        </div>

        {/* Right Side - Vertically centered content */}
        <div className="md:w-2/3 flex items-center">
          <div className="w-full space-y-6">
            {/* Description */}
            <div className="bg-gray-300 shadow rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Manage Your Spare Parts Seamlessly
              </h2>
              <p className="text-gray-600 text-sm">
                Add new spare parts, log their usage, or monitor the complete
                inventory through a simple and professional interface.
              </p>
            </div>

            {/* Action Cards */}
            <div className="space-y-4">
              {/* Add Spare Part */}
              <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Add Spare Part
                  </h3>
                  <p className="text-sm text-gray-600">
                    Register new items to your inventory.
                  </p>
                </div>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-blue-300 cursor-pointer hover:bg-gray-300 text-black px-4 py-2 rounded"
                >
                 <div className="flex items-center space-x-2">
                <DiamondPlus size={20} color="black" />
                <span className="text-lg font-medium">Add</span>
                </div>
                </button>
              </div>

              {/* Use Spare Part */}
              <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Use Spare Part
                  </h3>
                  <p className="text-sm text-gray-600">
                    Log usage of spare parts for work orders or maintenance.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setUseForm((prev) => ({
                      ...prev,
                      timestamp: new Date().toLocaleString(),
                    }));
                    setShowUseForm(true);
                  }}
                  className="bg-blue-300 cursor-pointer hover:bg-gray-300 text-black px-4 py-2 rounded"
                >
                <div className="flex items-center space-x-2">
                < Hammer size={20} color="black" />
                <span className="text-lg font-medium">Use</span>
                </div>
                </button>
              </div>

              {/* View All Parts */}
              <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    View All Parts
                  </h3>
                  <p className="text-sm text-gray-600">
                    Review and manage only by Admin.
                  </p>
                </div>
                <button
                  onClick={() => navigate("/all-parts")}
                  className="bg-blue-300 cursor-pointer hover:bg-gray-300 text-black px-4 py-2 rounded"
                >
                <div className="flex items-center space-x-2">
                <Eye size={20} color="black" />
                <span className="text-lg font-medium">Add</span>
                </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md space-y-4">
            <h3 className="text-xl font-semibold text-center">
              Add Spare Part
            </h3>
            <form onSubmit={handleAddSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Category"
                value={addForm.category}
                onChange={(e) =>
                  setAddForm({ ...addForm, category: e.target.value })
                }
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Product ID"
                value={addForm.productId}
                onChange={(e) =>
                  setAddForm({ ...addForm, productId: e.target.value })
                }
                required
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex justify-between pt-2">
                <button
                  type="submit"
                  className="bg-blue-300 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-300 cursor-pointer text-gray-800 px-4 py-2 rounded  hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showUseForm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md space-y-4">
            <h3 className="text-xl font-semibold text-center">
              Use Spare Part
            </h3>
            <form onSubmit={handleUseSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Product ID"
                value={useForm.productId}
                onChange={(e) =>
                  setUseForm({ ...useForm, productId: e.target.value })
                }
                required
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                placeholder="Usage Description"
                value={useForm.description}
                onChange={(e) =>
                  setUseForm({ ...useForm, description: e.target.value })
                }
                required
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-xs text-gray-500">Time: {useForm.timestamp}</p>
              <div className="flex justify-between pt-2">
                <button
                  type="submit"
                  className="bg-blue-300 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowUseForm(false)}
                  className="bg-gray-300 cursor-pointer text-gray-800 px-4 py-2 rounded  hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
