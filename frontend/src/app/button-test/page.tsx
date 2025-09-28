import { Button } from '@/components/button';

const ButtonTestPage = () => {
  return (
    <div className="p-10">
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-bold">Primary</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Medium</h3>
              <Button variant="primary" size="medium">Button</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Small</h3>
              <Button variant="primary" size="small">Button</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Disabled</h3>
              <Button variant="primary" size="medium" disabled>Button</Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold">Neutral</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Medium</h3>
              <Button variant="neutral" size="medium">Button</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Small</h3>
              <Button variant="neutral" size="small">Button</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Disabled</h3>
              <Button variant="neutral" size="medium" disabled>Button</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonTestPage;
