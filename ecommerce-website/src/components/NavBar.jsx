import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyWebsite</div>
        <div className="space-x-4">
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</button>
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</button>
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">Cart</button>
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
