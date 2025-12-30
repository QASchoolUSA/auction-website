import { FunctionComponent, ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
}

const Tabs: FunctionComponent<TabsProps> = ({ children }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8" aria-label="Tabs">
        {children}
      </nav>
    </div>
  );
};

export default Tabs;
