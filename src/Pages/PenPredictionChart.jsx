// PenPredictionChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const PenPredictionChart = () => {
  const predictionData = {
    labels: ["2025", "2026", "2027"],
    datasets: [
      {
        label: "2₹ Pens",
        data: [351, 400, 450],
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.3,
      },
      {
        label: "5/10₹ Pens",
        data: [67, 90, 110],
        fill: false,
        borderColor: "#f97316",
        tension: 0.3,
      },
      {
        label: "Reynolds TRIMAX",
        data: [1, 2, 3],
        fill: false,
        borderColor: "#facc15",
        tension: 0.3,
      },
      {
        label: "Total Pens",
        data: [419, 492, 563],
        fill: false,
        borderColor: "#10b981",
        tension: 0.3,
        borderDash: [5, 5],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: '#334155' },
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: '#334155' },
      },
    },
  };

  return (
    <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg animate-slide-up w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-x-auto">
      <h2 className="text-xl font-semibold mb-2 text-center text-white">Pen Collection Prediction (Next 3 Years)</h2>
      <div className="w-full h-full min-w-[300px]">
        <Line data={predictionData} options={options} />
      </div>
    </div>
  );
};

export default PenPredictionChart;
