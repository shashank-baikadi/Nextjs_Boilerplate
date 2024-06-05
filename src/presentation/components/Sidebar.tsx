"use client"
import { useState } from 'react';
import { FaUser, FaBook, FaCog, FaInfo } from 'react-icons/fa';
import SecondaryBar from './SecondaryBar';
import Link from 'next/link';
const Sidebar = () => {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
  
<div className='h-[90vh] bg-gray-200 w-[8vh] flex'>
<div className="flex flex-col w-[8vh] bg-gray- p-2 space-y-8 ml-2">
<FaUser onClick={() => setShowSecondary(true)} className='h-6 w-6' />
<Link href="/employees">
          <FaBook className='h-6 w-6' />
        </Link>
        <FaCog className='h-6 w-6'/>
        <FaInfo className='h-6 w-6'/>
</div>
<div>
{showSecondary && <SecondaryBar />}
</div>

</div>
  );
};

export default Sidebar;

