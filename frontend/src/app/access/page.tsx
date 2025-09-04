'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout'; // Import the new AuthLayout

export default function AccessPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const correctCode = 'achievers-2025-2';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === correctCode) {
      sessionStorage.setItem('isAuthenticated', 'true');
      router.push('/members');
    } else {
      setError('Invalid code. Please try again.');
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center text-gray-900">Enter Access Code</h2>
      <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="access-code" className="sr-only">
            Access Code
          </label>
          <input
            id="access-code"
            name="access-code"
            type="text"
            required
            className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
            placeholder="Access Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
