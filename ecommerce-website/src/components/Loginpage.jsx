import React from 'react';

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-2xl text-gray-800 text-center font-semibold">Welcome!</p>

          <div className="mt-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <a href="#" className="text-xs text-gray-500 hover:text-cyan-500">
                Forget Password?
              </a>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-8">
            <button className="bg-cyan-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50">
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a
              href="signup"
              className="text-xs text-gray-500 uppercase hover:text-cyan-500"
            >
              or sign up
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
