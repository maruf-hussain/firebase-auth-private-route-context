import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";


export default function Login() {
  const {signInUser,  googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
    console.log(email,password)

    signInUser(email,password)
    .then(result => {
      console.log(result.user)
      e.target.reset()
      navigate('/')
    })
    .catch(err =>{
      console.log('erro',err.message)
    })


  }

  // ..........google sign id........................
  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result =>{
      console.log(result);
      navigate('/')
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
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
              className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              required
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-200">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded accent-pink-500" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="hover:underline text-pink-200">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center">
          <span className="w-1/5 border-b border-gray-300"></span>
          <span className="mx-2 text-sm text-white">or</span>
          <span className="w-1/5 border-b border-gray-300"></span>
        </div>

        {/* Social Login */}
        <div className="mt-6 flex space-x-4">
          <button onClick={handleGoogleSignIn} className="flex-1 py-2 bg-white rounded-lg shadow-md text-gray-700 font-medium hover:bg-gray-100 transition">
            Google
          </button>
          <button className="flex-1 py-2 bg-blue-700 rounded-lg shadow-md text-gray-100 font-medium hover:bg-gray-100 transition">
            Facebook
          </button>
        </div>

        {/* Signup link */}
        <p className="mt-6 text-center text-white text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-pink-200 font-semibold hover:underline">
        
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
