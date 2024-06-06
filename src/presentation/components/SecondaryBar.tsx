"use client"
import { useState } from 'react';
import { FaHome, FaUser, FaCog, FaInfo } from 'react-icons/fa';
import RegistrationForm from './RegistrationForm';
import Link from 'next/link';

const SecondaryBar = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='  bg-gray-100 w-[15vh] h-[90vh] p-2 space-y-8  flex '>
<div className='space-y-8'>
      <div onClick={() => setShowForm(true)} className=' border px-3 bg-blue-100 rounded-md'>POST</div>
      <div className='border px-3 bg-blue-100 rounded-md'>
        <Link href='get/employees'>
        GET
        </Link>
        </div>
        <div className='border px-3 bg-blue-100 rounded-md'>
        <Link href='get/bookpage'>
        PATCH
        </Link>
        </div>
      <div className='border px-3 bg-blue-100 rounded-md' > DELETE</div>
      </div>
<div className='ml-12'>
      {showForm && <RegistrationForm />}
      </div>
    </div>
  );
};

export default SecondaryBar;