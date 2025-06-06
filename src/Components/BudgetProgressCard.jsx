
import { CalculatorIcon } from '@heroicons/react/24/outline';

const BudgetProgressCard = ({ monthlyBudget, currentSpend }) => {
  const progress = (currentSpend / monthlyBudget) * 100;
  const isOverBudget = progress > 100;
  
  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-500 text-sm sm:text-base">Monthly Budget</p>
          <h3 className="text-xl sm:text-2xl font-bold mt-1">₹{monthlyBudget.toFixed(2)}</h3>
        </div>
        <div className="p-2 sm:p-3 bg-blue-100 rounded-full">
          <CalculatorIcon className=" w-5 sm:w-6 sm:h-6 text-blue-600" />
        </div>
      </div>
      
      <div className="mt-2">
        <div className="flex justify-between mb-1 text-sm">
          <span className="text-gray-600">Progress</span>
          <span className={`font-medium ${isOverBudget ? 'text-red-600' : 'text-green-600'}`}>
            {Math.min(progress, 100).toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${
              isOverBudget ? 'bg-red-500' : 'bg-green-500'
            }`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Spent: ₹{currentSpend.toFixed(2)}
        </p>
        {isOverBudget && (
          <p className="text-sm text-red-600 mt-1">
            Over budget by ₹{(currentSpend - monthlyBudget).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default BudgetProgressCard;
