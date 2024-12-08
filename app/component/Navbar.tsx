// "use client";
// import { FaSearch, FaRegUserCircle,   } from 'react-icons/fa'; // Using react-icons for cart and user icons
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FiShoppingCart, FiSearch } from "react-icons/fi";
// import { useState } from 'react'; 
// import Image from "next/image"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-grey-600 p-4 mx-[100px]">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//       <Image src={"/logo.png"} alt="logo" width={160} height={22}/>
        
//         <div className="hidden md:flex space-x-[23px]">
//           <a href="#" className="text-sm hover:text-gray-400">Shop <RiArrowDropDownLine className='inline'/></a>
//           <a href="#" className="text-sm hover:text-gray-400">On Sale</a>
//           <a href="#" className="text-sm hover:text-gray-400">New Arrivals</a>
//           <a href="#" className="text-sm hover:text-gray-400">Brands</a>
//         </div>

//         <div className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-full">
//         <FiSearch />
//           <input 
//             type="text" 
//             placeholder="Search for products..." 
//             className="bg-transparent outline-none text-white placeholder-gray-400" 
//           />
//           <FaSearch className="text-white" />
//         </div>

//         <div className="flex space-x-4 items-center">
//           <div className="cursor-pointer">
//             <FiShoppingCart className="text-black text-2xl" />
//           </div>
//           <div className="cursor-pointer">
//             <FaRegUserCircle  className="text-black text-2xl" />
//           </div>
//         </div>

//         <button onClick={toggleMenu} className="md:hidden text-2xl">
//           {isOpen ? 'X' : '☰'}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-gray-700 p-4 space-y-4">
//           <a href="/" className="block text-white">Home</a>
//           <a href="/about" className="block text-white">About</a>
//           <a href="/services" className="block text-white">Services</a>
//           <a href="/contact" className="block text-white">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar


"use client";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-50 shadow-md py-4 px-4 md:px-[100px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image src={"/logo.png"} alt="logo" width={160} height={22} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-[23px]">
          <a href="#" className="text-sm hover:text-gray-500">
            Shop <RiArrowDropDownLine className="inline" />
          </a>
          <a href="#" className="text-sm hover:text-gray-500">
            On Sale
          </a>
          <a href="#" className="text-sm hover:text-gray-500">
            New Arrivals
          </a>
          <a href="#" className="text-sm hover:text-gray-500">
            Brands
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-sm placeholder-gray-400"
          />
          <FaSearch className="text-gray-500" />
        </div>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          <div className="cursor-pointer">
            <FiShoppingCart className="text-black text-2xl" />
          </div>
          <div className="cursor-pointer">
            <FaRegUserCircle className="text-black text-2xl" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-black focus:outline-none"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 mt-2 p-4 space-y-4 rounded shadow-md">
          <a href="/" className="block text-gray-700 hover:text-gray-500">
            Shop
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-500">
            On Sale
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-500">
            New Arrivals
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-500">
            Brands
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
