"use client";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiShoppingCart} from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-50 shadow-md py-4 px-4 md:px-[100px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-sm hover:text-gray-500">
        <Image className="cursor-pointer" src={"/logo.png"} alt="logo" width={160} height={22} />
          </Link>

        <div className="hidden md:flex space-x-[23px]">
          <Link href="/arrival" className="text-sm hover:text-gray-500">
            Shop <RiArrowDropDownLine className="inline" />
          </Link>
          <Link href="/sale" className="text-sm hover:text-gray-500">
            On Sale
          </Link>
          <Link href="/arrival" className="text-sm hover:text-gray-500">
            New Arrivals
          </Link>
          <Link href="/brand" className="text-sm hover:text-gray-500">
            Brands
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-sm placeholder-gray-400"
          />
          <FaSearch className="text-gray-500" />
        </div>

        <div className="flex space-x-4 items-center">
          <div className="cursor-pointer">
          <Link href="/cart" className="text-sm hover:text-gray-500">
            <FiShoppingCart className="text-black text-2xl" />
          </Link>
          </div>
          <div className="cursor-pointer">
          <Link href="/login" className="text-sm hover:text-gray-500">
            {/* <FiShoppingCart className="text-black text-2xl" /> */}
            <FaRegUserCircle className="text-black text-2xl" />
          </Link>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-black focus:outline-none"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 mt-2 p-4 space-y-4 rounded shadow-md">
          <Link href="/arrival" className="block text-gray-700 hover:text-gray-500">
            Shop
          </Link>
          <Link href="/sale" className="block text-gray-700 hover:text-gray-500">
            On Sale
          </Link>
          <Link href="/arrival" className="block text-gray-700 hover:text-gray-500">
            New Arrivals
          </Link>
          <Link href="/brand" className="block text-gray-700 hover:text-gray-500">
            Brands
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
