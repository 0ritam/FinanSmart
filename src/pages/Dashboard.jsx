
import ChartsGrid from '../Components/ChartsGrid';
import RecentActivity from '../Components/RecentActivity';
import SummaryCards from '../Components/SummaryCards';

const Dashboard = ({ 
  totalIncome,
  currentMonthExpenses,
  transactions,
  expenseCategories,
  MONTHLY_BUDGET
}) => {
  // Prepare data for expense categories pie chart
  const pieChartData = {
    labels: Object.keys(expenseCategories),
    datasets: [{
      data: Object.values(expenseCategories),
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        '#9966FF', '#FF9F40', '#FF6384', '#36A2EB'
      ],
      hoverBackgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        '#9966FF', '#FF9F40', '#FF6384', '#36A2EB'
      ]
    }]
  };

  // Prepare monthly trend data
  const last6Months = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return {
      month: date.toLocaleString('default', { month: 'short' }),
      year: date.getFullYear(),
      monthIndex: date.getMonth(),
      yearMonth: `${date.getFullYear()}-${date.getMonth()}`
    };
  }).reverse();

  const monthlyExpenses = last6Months.map(({ monthIndex, year }) => {
    return transactions
      .filter(t => {
        const date = new Date(t.date);
        return t.type === 'expense' && 
               date.getMonth() === monthIndex && 
               date.getFullYear() === year;
      })
      .reduce((sum, t) => sum + t.amount, 0);
  });

  const monthlyIncomes = last6Months.map(({ monthIndex, year }) => {
    return transactions
      .filter(t => {
        const date = new Date(t.date);
        return t.type === 'income' && 
               date.getMonth() === monthIndex && 
               date.getFullYear() === year;
      })
      .reduce((sum, t) => sum + t.amount, 0);
  });

  const trendData = {
    labels: last6Months.map(m => m.month),
    datasets: [
      {
        label: 'Income',
        data: monthlyIncomes,
        borderColor: '#4BC0C0',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Expenses',
        data: monthlyExpenses,
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      }
    ]
  };

  // Prepare category comparison data
  const categoryComparisonData = {
    labels: Object.keys(expenseCategories),
    datasets: [{
      label: 'Category Expenses',
      data: Object.values(expenseCategories),
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1
    }]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Summary Cards */}
      <SummaryCards
        currentMonthExpenses={currentMonthExpenses}
        totalIncome={totalIncome}
        monthlyBudget={MONTHLY_BUDGET}
      />

      {/* Charts Grid */}
      <ChartsGrid
        pieChartData={pieChartData}
        categoryComparisonData={categoryComparisonData}
        trendData={trendData}
      />

      {/* Recent Activity */}
      <div className="mt-6">
        <RecentActivity transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;
