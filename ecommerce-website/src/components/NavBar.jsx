import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from "/public/image.png";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
        <Image
          src={logo}
          alt="code"
          width={50}
          height={100}
          className="h-10"
        />MyWebsite</div>
        <div className="space-x-4">
          <Link href="/">
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</button>
          </Link>
          <Link href="/products">
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">Products</button>
          </Link>
          <Link href="/cart">
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">Cart</button>
          </Link>
          <Link href="/profile">
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">Profile</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
