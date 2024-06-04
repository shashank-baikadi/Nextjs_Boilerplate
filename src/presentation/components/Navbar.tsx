"use client"
import Link from 'next/link';
import logo from '../../../public/LOGO V1 (1).png'
import Image from "next/image";
const Navbar = () => (
  // <div className='bg-gray-900 h-[10vh]'>
  // <nav className='flex justify-items-center'>
  //   <img src="" alt="Logo" />
  //   <Link href="/contact">Contact Us</Link>
  //   <Link href="/about">About Us</Link>
  //   <Link href="/blog">Blog</Link>
  // </nav>
  // </div>
  <div className="h-[8vh]">
  <nav className={`flex items-center justify-between`}>
    <div className="flex">
      <Image src={logo} alt="Logo" className="h-10 w-10 mt-3 ml-3" />
      <span className="text-black font-bold text-3xl ml-4 mt-3 items-center">Infokalash</span>
    </div>
    <ul className="flex space-x-4 text-lg mr-16">
       <Link href="/contact">Contact Us</Link>
     <Link href="/about">About Us</Link>
     <Link href="/blog">Blog</Link>
    </ul>
  </nav>
</div>
);

export default Navbar;