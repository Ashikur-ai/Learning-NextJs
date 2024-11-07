import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between py-4 border gap-20 border-black">
        <div className="ml-10">
          <Link href={'/about'}>About Us</Link>
       </div>
        <div className="">
          <Link href={'/contact'}>contact Us</Link>
        </div>
        <div className="">
          <Link href={'/portfolio'}>portfolio </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;