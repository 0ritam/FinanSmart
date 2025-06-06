import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  CurrencyDollarIcon,
  CalculatorIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
    { name: 'Incomes', icon: CurrencyDollarIcon, path: '/incomes' },
    { name: 'Expenses', icon: DocumentTextIcon, path: '/expenses' },
    { name: 'Budgets', icon: CalculatorIcon, path: '/budgets' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-600" />
          )}
        </button>
        <h1 className="text-xl font-bold text-blue-600 ml-4">FinanSmart</h1>
      </div>

      {/* Sidebar */}
      <div className={`
        transform transition-transform duration-300 ease-in-out
        fixed top-0 left-0 h-screen bg-white border-r border-gray-200
        w-64 z-40 pt-16 md:pt-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-4">
          {/* Desktop logo - hidden on mobile */}
          <h1 className="hidden md:block text-2xl font-bold text-blue-600 mb-8">
            <span>FinanSmart</span>
          </h1>
        </div>

        <nav className="px-4 space-y-2 mt-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
