// Transaction management functions
export const addTransaction = (transactions, setTransactions) => (transaction) => {
  setTransactions([...transactions, transaction]);
};

export const updateTransaction = (transactions, setTransactions) => (id, updatedData) => {
  setTransactions(transactions.map(transaction => 
    transaction.id === id 
      ? { ...transaction, ...updatedData } 
      : transaction
  ));
};

export const deleteTransaction = (transactions, setTransactions) => (id) => {
  setTransactions(transactions.filter(
    (transaction) => transaction.id !== id
  ));
};

// Calculation functions
export const calculateCurrentMonthExpenses = (transactions) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  return transactions
    .filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        transaction.type === "expense" &&
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear
      );
    })
    .reduce((acc, transaction) => acc + transaction.amount, 0);
};

export const calculateBudgetProgress = (currentMonthExpenses, monthlyBudget) => {
  return (currentMonthExpenses / monthlyBudget) * 100;
};

export const calculateTotals = (transactions) => {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return { totalIncome, totalExpense, balance };
};

export const calculateExpenseCategories = (transactions) => {
  return transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => {
      const category = transaction.category || "Other";
      acc[category] = (acc[category] || 0) + transaction.amount;
      return acc;
    }, {});
};
