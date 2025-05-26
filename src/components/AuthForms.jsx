import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, y: -30, transition: { duration: 0.2 } },
};
 export const AuthCard = ({ children, title }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="w-[450px] bg-white shadow-lg rounded-2xl p-10 border border-gray-200"
  >
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{title}</h2>
    {children}
  </motion.div>
);
export const SignInForm = ({ onClose, switchToSignUp }) => {
  const [showForgot, setShowForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Sign In with", { email, password });
     navigate("/hero");
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {!showForgot ? (
        <AuthCard key="signin" title="Sign In">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Email Id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <button onClick={() => setShowForgot(true)} className="hover:underline">
              Forgot password?
            </button>
            <button onClick={switchToSignUp} className="hover:underline">
              New here? Sign up
            </button>
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full text-center text-gray-500 hover:underline"
          >
            Close
          </button>
        </AuthCard>
      ) : (
        <ForgotPasswordCard onBack={() => setShowForgot(false)} />
      )}
    </AnimatePresence>
  );
};
export const SignUpForm = ({ onClose, switchToSignIn }) => {
  const [role, setRole] = useState("user");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your signup logic
    console.log("Sign Up with", { fullName, role, email, password });
    navigate("/hero");
    onClose();
  };

  return (
    <AuthCard title="Sign Up">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Email Id"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
        <button onClick={switchToSignIn} className="text-blue-600 hover:underline">
          Login
        </button>
      </div>
      <button
        onClick={onClose}
        className="mt-6 w-full text-center text-gray-500 hover:underline"
      >
        Close
      </button>
    </AuthCard>
  );
};


const ForgotPasswordCard = ({ onBack }) => (
  <AuthCard title="Reset Password">
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Enter your email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="you@example.com"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
      >
        Send Reset Link
      </button>
      <button
        type="button"
        onClick={onBack}
        className="w-full mt-2 text-sm text-gray-500 hover:underline"
      >
        ← Back to Sign In
      </button>
    </form>
  </AuthCard>
);
