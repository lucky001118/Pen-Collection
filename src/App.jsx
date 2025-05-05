// App.jsx
import React from 'react';
import SalesChart from './Pages/SalesChart';
import SalesPieChart from './Pages/SalesPieChart';
import PenDashboard from './Pages/PenDashboard';

const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">📊 Sales Dashboard</h1> */}
      {/* <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
        <SalesChart />
        <SalesPieChart />
      </div> */}

      <PenDashboard />
    </div>
  );
};

export default App;
