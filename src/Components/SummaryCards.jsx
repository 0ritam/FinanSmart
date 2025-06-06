
import BudgetProgressCard from './BudgetProgressCard';

const SummaryCards = ({ currentMonthExpenses, totalIncome, monthlyBudget }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <BudgetProgressCard 
        monthlyBudget={monthlyBudget} 
        currentSpend={currentMonthExpenses}
      />

      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm sm:text-base">Current Month Expenses</p>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">₹{currentMonthExpenses.toFixed(2)}</h3>
          </div>
          <div className="p-2 sm:p-3 bg-red-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm sm:text-base">Total Income</p>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">₹{totalIncome.toFixed(2)}</h3>
          </div>
          <div className="p-2 sm:p-3 bg-green-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
