
import { Pie, Bar, Line } from 'react-chartjs-2';

const ChartsGrid = ({ pieChartData, categoryComparisonData, trendData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {/* Expense Distribution */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Expense Distribution</h2>
        <div className="h-48 sm:h-64">
          <Pie data={pieChartData} options={{ 
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  boxWidth: 12,
                  padding: 15,
                  font: {
                    size: window.innerWidth < 640 ? 10 : 12
                  }
                }
              }
            }
          }} />
        </div>
      </div>

      {/* Category Comparison */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Category Comparison</h2>
        <div className="h-48 sm:h-64">
          <Bar 
            data={categoryComparisonData} 
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    font: {
                      size: window.innerWidth < 640 ? 10 : 12
                    }
                  }
                },
                x: {
                  ticks: {
                    font: {
                      size: window.innerWidth < 640 ? 10 : 12
                    }
                  }
                }
              }
            }} 
          />
        </div>
      </div>

      {/* Income vs Expense Trend */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 col-span-1 lg:col-span-2">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Income vs Expense Trend</h2>
        <div className="h-48 sm:h-64">
          <Line 
            data={trendData} 
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    font: {
                      size: window.innerWidth < 640 ? 10 : 12
                    }
                  }
                },
                x: {
                  ticks: {
                    font: {
                      size: window.innerWidth < 640 ? 10 : 12
                    }
                  }
                }
              },
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: window.innerWidth < 640 ? 10 : 12
                    }
                  }
                }
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default ChartsGrid;
