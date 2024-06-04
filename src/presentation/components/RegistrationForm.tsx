

"use client";
import { useState } from 'react';
import { useRegistration } from '../../application/hooks/userRepository';

const RegistrationForm = () => {
  const [form, setForm] = useState({ name: '', lastName: '', email: '', phone: '' });
  const { register } = useRegistration();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md space-y-4 w-[80vh]">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input 
          type="text" 
          placeholder="Name" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          onChange={e => setForm({...form, name: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input 
          type="text" 
          placeholder="Last Name" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          onChange={e => setForm({...form, lastName: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          placeholder="Email" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          onChange={e => setForm({...form, email: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input 
          type="tel" 
          placeholder="Phone" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          onChange={e => setForm({...form, phone: e.target.value})}
        />
      </div>
      <button 
        type="submit" 
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
