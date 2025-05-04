// components/SalesPieChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: ['Electronics', 'Clothing', 'Groceries', 'Books', 'Others'],
  datasets: [
    {
      label: 'Product Categories',
      data: [300, 150, 100, 80, 70],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',   // blue
        'rgba(16, 185, 129, 0.7)',   // green
        'rgba(249, 115, 22, 0.7)',   // orange
        'rgba(168, 85, 247, 0.7)',   // purple
        'rgba(239, 68, 68, 0.7)',    // red
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateScale: true,
    duration: 1200,
    easing: 'easeOutElastic',
  },
  plugins: {
    legend: { position: 'bottom' },
    title: {
      display: true,
      text: 'Product Sales Distribution',
    },
  },
};

const SalesPieChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 h-[400px] sm:h-[320px] w-full">
      <Pie data={data} options={options} />
    </div>
  );
};

export default SalesPieChart;
