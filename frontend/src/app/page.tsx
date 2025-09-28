'use client';

import { Header } from '@/components/header/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSignIn={() => alert('Sign in clicked!')}
        onRegister={() => alert('Register clicked!')}
      />
      
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Header Component Test</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Component Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Responsive header with logo</li>
            <li>Navigation menu with active state</li>
            <li>Authentication buttons (Sign in / Register)</li>
            <li>Figma design compliant</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Implementation Details</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Uses Inter font family</li>
            <li>Max width: 1200px</li>
            <li>Border bottom: #D9D9D9</li>
            <li>Active nav item background: #F5F5F5</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
