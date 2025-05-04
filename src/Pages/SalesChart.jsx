// components/SalesBarChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const data = {
  labels,
  datasets: [
    {
      label: 'Online Sales',
      data: [65, 59, 80, 81, 56, 75],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderRadius: 6,
    },
    {
      label: 'Offline Sales',
      data: [35, 45, 60, 40, 70, 55],
      backgroundColor: 'rgba(16, 185, 129, 0.6)',
      borderRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1500,
    easing: 'easeOutBounce',
  },
  plugins: {
    legend: { position: 'bottom' },
    title: {
      display: true,
      text: 'Monthly Sales Comparison',
    },
  },
};

const SalesBarChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 h-[400px] sm:h-[320px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesBarChart;
