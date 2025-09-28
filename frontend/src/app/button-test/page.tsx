import React from 'react';
import { Button } from '@/components/button/Button';

const ButtonTestPage = () => {
  return (
    <div className="p-10 space-y-4">
      <h2 className="text-xl font-bold">Primary Buttons</h2>
      <div className="flex items-center space-x-4">
        <Button variant="primary" size="medium">Medium Primary</Button>
        <Button variant="primary" size="small">Small Primary</Button>
        <Button variant="primary" size="medium" disabled>Disabled</Button>
      </div>

      <h2 className="text-xl font-bold">Neutral Buttons</h2>
      <div className="flex items-center space-x-4">
        <Button variant="neutral" size="medium">Medium Neutral</Button>
        <Button variant="neutral" size="small">Small Neutral</Button>
        <Button variant="neutral" size="medium" disabled>Disabled</Button>
      </div>
    </div>
  );
};

export default ButtonTestPage;
