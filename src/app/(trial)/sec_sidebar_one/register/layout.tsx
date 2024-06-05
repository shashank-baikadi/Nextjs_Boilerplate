'use client'
import SecondaryBar from '@/presentation/components/SecondaryBar';
import {useState} from 'react';
export default function Layout({ children }:{ children: React.ReactNode }) {
const [input, setInput] = useState("");
return (
    <div className='flex'>
        <div>
        <SecondaryBar/>
        </div>
        <div>
      {children}
      </div>
    </div>
  );
}