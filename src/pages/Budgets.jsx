import { useState, useEffect } from 'react';

//The monthly budget is set in the local storage with persistency
const Budgets = () => {
  const [monthlyBudget, setMonthlyBudget] = useState(() => { //Initializes the monthlyBudget state with a value from localStorage or a default of 1000.
    try {
      const saved = localStorage.getItem('monthlyBudget');
      return saved ? parseFloat(saved) : 1000;
    } catch (error) {
      console.error('Error loading monthly budget:', error);
      return 1000;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempBudget, setTempBudget] = useState(monthlyBudget);

  useEffect(() => {  //Saves the monthlyBudget to localStorage whenever it changes.
    try {
      localStorage.setItem('monthlyBudget', monthlyBudget.toString());
    } catch (error) {
      console.error('Error saving monthly budget:', error);
    }
  }, [monthlyBudget]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMonthlyBudget(parseFloat(tempBudget));
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Monthly Budget Settings</h1>
        
        {!isEditing ? (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Current Monthly Budget</p>
              <h2 className="text-3xl font-bold text-gray-900">₹{monthlyBudget.toFixed(2)}</h2>
            </div>
            <button
              onClick={() => {
                setTempBudget(monthlyBudget);
                setIsEditing(true);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Edit Budget
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Set Monthly Budget
              </label>
              <input
                type="number"
                value={tempBudget}
                onChange={(e) => setTempBudget(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save Budget
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">About Monthly Budget</h3>
          <p className="text-gray-600">
            This budget will be used to track your monthly spending across all categories. 
            The dashboard will show you how close you are to reaching your budget limit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
