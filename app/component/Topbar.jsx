'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:bg-[#f84352] py-4 md:px-7 px-1 md:m-3 rounded-t-md ">
    <div className="md:px-6 px-2 py-2 rounded-sm bg-white shadow-lg flex justify-between items-center">
        <div><Image src={"/Logo.png"} alt="logo" width="150" height="120" /></div>
        <div className="hidden md:flex">
          <div className="flex justify-center gap-x-2 items-center">
            <Link href="#" className="font-semibold hover:bg-[#f84352] px-4 rounded-sm text-lg" >Home</Link>
            <Link href="#" className="font-semibold hover:bg-[#f84352] px-4 rounded-sm text-lg">Store</Link>
            <Link href="#" className="font-semibold hover:bg-[#f84352] px-4 rounded-sm text-lg">Contact</Link>
            <Link href="#" className="font-semibold hover:bg-[#f84352] px-4 rounded-sm text-lg">Seller</Link>
            <Link href="#" className="font-semibold hover:bg-[#f84352] px-4 rounded-sm text-lg">Avatar</Link>
          </div>
        </div>
        <div className="flex gap-x-3 items-center">
          <div className="md:flex hidden border rounded-sm border-gray-300">
            <button className="p-2 border-l  border-gray-300 first:border-l-0 last:border-r-0"><IoSearch /></button>
            <button className="p-2 border-l  border-gray-300 first:border-l-0 last:border-r-0"><FaRegHeart /></button>
            <button className="p-2 border-l  border-gray-300 first:border-l-0 last:border-r-0"><LiaShoppingBagSolid /></button>
            <button className="p-2 border-l border-r border-gray-300 first:border-l-0 last:border-r-0"><FaRegUser /></button>
          </div>
          <div>
            <button className="px-2 py-1 font-medium text-gray-700 rounded-sm border border-gray-300">SignUp / Login</button>
          </div>
          <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <IoMdClose className="w-6 h-6" /> : <IoMdMenu className="w-6 h-6" />}
          </button>
        </div>
        
        </div>
        
    </div>
    {isOpen && (
       <div className="fixed inset-0 z-50 md:hidden flex items-center justify-center bg-black bg-opacity-50">
       <div className="bg-white rounded-lg shadow-lg p-2 w-full h-[98vh] pt-2 my-2 mx-2 relative">
       <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 flex justify-end w-full focus:outline-none">
            {<IoMdClose className="w-6 h-6" /> }
          </button>
       <ul className="flex flex-col items-center justify-center h-[85%] gap-y-4">
            <Link href="#" className="font-semibold hover:bg-[#f84352] hover:text-white py-2 px-4 rounded-sm text-2xl">Home</Link>
            <Link href="#" className="font-semibold hover:bg-[#f84352] hover:text-white py-2 px-4 rounded-sm text-2xl">Store</Link>
            <Link href="#" className="font-semibold hover:bg-[#f84352] hover:text-white py-2 px-4 rounded-sm text-2xl">Contact</Link>
            <Link href="#" className="font-semibold hover:bg-[#f84352] hover:text-white py-2 px-4 rounded-sm text-2xl">Seller</Link>
            <Link href="#" className="font-semibold hover:bg-[#f84352] hover:text-white py-2 px-4 rounded-sm text-2xl">Avatar</Link>
          </ul>

          <div className="flex border w-fit mx-auto rounded-sm border-gray-300">
            <button className="p-2 border-l  border-gray-300 first:border-l-0 last:border-r-0"><IoSearch /></button>
            <button className="p-2 border-l  border-gray-300 first:border-l-0 last:border-r-0"><FaRegHeart /></button>
            <button className="p-2 border-l  border-gray-300 first:border-l-0 last:border-r-0"><LiaShoppingBagSolid /></button>
            <button className="p-2 border-l border-r border-gray-300 first:border-l-0 last:border-r-0"><FaRegUser /></button>
          </div>
       </div>
     </div>
        // <div className="md:hidden bg-white py-2 h-screen m-2 shadow-3xl">
         
        // </div>
      )}
    </div>
  )
}

export default Topbar