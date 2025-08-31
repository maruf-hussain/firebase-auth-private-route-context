import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export default function Register() {
const {createUser} = useContext(AuthContext)



const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password)


    createUser(email,password)
.then(result => {
    console.log(result.user)
})
}


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account ✨
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center">
          <span className="w-1/5 border-b border-gray-300"></span>
          <span className="mx-2 text-sm text-white">or</span>
          <span className="w-1/5 border-b border-gray-300"></span>
        </div>

        {/* Social Signup */}
        <div className="mt-6 flex space-x-4">
          <button className="flex-1 py-2 bg-white rounded-lg shadow-md text-gray-700 font-medium hover:bg-gray-100 transition">
            Google
          </button>
          <button className="flex-1 py-2 bg-white rounded-lg shadow-md text-gray-700 font-medium hover:bg-gray-100 transition">
            Facebook
          </button>
        </div>

        {/* Login link */}
        <p className="mt-6 text-center text-white text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-green-200 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
