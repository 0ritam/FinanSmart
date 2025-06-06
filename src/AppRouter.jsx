import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Incomes from './pages/Incomes';
import Expenses from './pages/Expenses';
import Budgets from './pages/Budgets';
import Sidebar from './Components/Sidebar';

const AppRouter = ({ 
  monthlyBudget,
  currentMonthExpenses,
  totalIncome,
  budgetProgress,
  transactions,
  expenseCategories,
  addTransaction,
  deleteTransaction,
  updateTransaction
}) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/*"
        element={
          <div className="min-h-screen bg-gray-100">
            <Sidebar />
            <div className="md:pl-64 pt-16 md:pt-0">
              <Routes>
                <Route 
                  path="/dashboard" 
                  element={
                    <Dashboard
                      totalBudget={monthlyBudget}
                      totalSpend={currentMonthExpenses}
                      totalIncome={totalIncome}
                      currentMonthExpenses={currentMonthExpenses}
                      MONTHLY_BUDGET={monthlyBudget}
                      budgetProgress={budgetProgress}
                      transactions={transactions}
                      expenseCategories={expenseCategories}
                    />
                  } 
                />
                <Route 
                  path="/incomes" 
                  element={
                    <Incomes 
                      transactions={transactions}
                      addTransaction={addTransaction}
                      deleteTransaction={deleteTransaction}
                      updateTransaction={updateTransaction}
                    />
                  } 
                />
                <Route 
                  path="/expenses" 
                  element={
                    <Expenses 
                      transactions={transactions.filter(t => t.type === 'expense')}
                      addTransaction={addTransaction}
                      deleteTransaction={deleteTransaction}
                      updateTransaction={updateTransaction}
                    />
                  } 
                />
                <Route path="/budgets" element={<Budgets />} />
              </Routes>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRouter;
