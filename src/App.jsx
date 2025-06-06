import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title
} from 'chart.js';
import AppRouter from "./AppRouter";
import {
  addTransaction as createAddTransaction,
  updateTransaction as createUpdateTransaction,
  deleteTransaction as createDeleteTransaction,
  calculateCurrentMonthExpenses,
  calculateBudgetProgress,
  calculateTotals,
  calculateExpenseCategories
} from './lib/transactionUtils';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title
);

const App = () => {
  // Initialize monthlyBudget from localStorage
  const [monthlyBudget, setMonthlyBudget] = useState(() => {
    try {
      const saved = localStorage.getItem('monthlyBudget');
      return saved ? parseFloat(saved) : 1000;
    } catch (error) {
      console.error('Error loading monthly budget:', error);
      return 1000;
    }
  });

  // Update monthlyBudget when it changes in localStorage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'monthlyBudget') {
        setMonthlyBudget(parseFloat(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Initialize state with localStorage data
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem("transactions");
      const initialValue = saved ? JSON.parse(saved) : [];
      console.log("Initial load:", initialValue);
      return initialValue;
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return [];
    }
  });

  // Save transactions to local storage whenever they change
  useEffect(() => {
    try {
      console.log("Saving transactions:", transactions);
      localStorage.setItem("transactions", JSON.stringify(transactions));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [transactions]);

  // Create transaction management functions
  const addTransaction = createAddTransaction(transactions, setTransactions);
  const updateTransaction = createUpdateTransaction(transactions, setTransactions);
  const deleteTransaction = createDeleteTransaction(transactions, setTransactions);

  // Calculate all the derived values
  const currentMonthExpenses = calculateCurrentMonthExpenses(transactions);
  const budgetProgress = calculateBudgetProgress(currentMonthExpenses, monthlyBudget);
  const { totalIncome, totalExpense, balance } = calculateTotals(transactions);
  const expenseCategories = calculateExpenseCategories(transactions);

  return (
    <Router>
      <AppRouter 
        monthlyBudget={monthlyBudget}
        currentMonthExpenses={currentMonthExpenses}
        totalIncome={totalIncome}
        budgetProgress={budgetProgress}
        transactions={transactions}
        expenseCategories={expenseCategories}
        addTransaction={addTransaction}
        deleteTransaction={deleteTransaction}
        updateTransaction={updateTransaction}
      />
    </Router>
  );
};

export default App;
