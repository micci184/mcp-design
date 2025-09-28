'use client';

import { Button } from '@/components/button/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Button Component Test</h1>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Primary Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Primary Variant</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Medium Size</p>
                <Button variant="primary" size="medium">
                  Primary Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Small Size</p>
                <Button variant="primary" size="small">
                  Small Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Disabled State</p>
                <Button variant="primary" size="medium" disabled>
                  Disabled Button
                </Button>
              </div>
            </div>
          </div>

          {/* Neutral Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Neutral Variant</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Medium Size</p>
                <Button variant="neutral" size="medium">
                  Neutral Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Small Size</p>
                <Button variant="neutral" size="small">
                  Small Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Disabled State</p>
                <Button variant="neutral" size="medium" disabled>
                  Disabled Button
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Test Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Interactive Test</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" onClick={() => alert('Primary button clicked!')}>
              Click Me (Primary)
            </Button>
            <Button variant="neutral" onClick={() => alert('Neutral button clicked!')}>
              Click Me (Neutral)
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
