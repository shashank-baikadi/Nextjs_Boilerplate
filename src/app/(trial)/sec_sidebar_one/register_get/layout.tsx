
import SecondaryBar from '@/presentation/components/SecondaryBar';
import {useState} from 'react';
export default function Layout({ children }:{ children: React.ReactNode }) {

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

// src/app/(trial)/sec_sidebar_one/register_get/layout.tsx
// const RegisterGetLayout = ({ children }: { children: React.ReactNode }) => (
//     <div>
//       <header>
//         <h1>Register Get</h1>
//       </header>
//       <main>{children}</main>
//       <footer>
//         <p>Register Get © 2024</p>
//       </footer>
//     </div>
//   );
  
//   export default RegisterGetLayout;
  