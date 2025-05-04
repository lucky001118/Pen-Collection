// PenCollectionDashboard.jsx
import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import PenPredictionChart from "./PenPredictionChart";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PenDashboard = () => {
  const twoRupeesData = {
    labels: [
      "Blue Body (Blue Pen)",
      "White Body (Blue Pen)",
      "Green Body (Blue Pen)",
      "Orange Body (Blue Pen)",
      "Pink Body (Blue Pen)",
      "Light Colour Body (Blue Pen)",
      "Black Body (Blue Pen)",
      "Other Colour Body (Blue Pen)",
      "Black Body (Black Pen)"
    ],
    datasets: [
      {
        label: "2 Rupees Pens",
        data: [42, 16, 36, 58, 44, 45, 33, 12, 65],
        backgroundColor: "#38bdf8",
        borderRadius: 10,
      },
    ],
  };

  const fiveTenData = {
    labels: [
      "Purana Cello/Montex/Other",
      "Te Amo (Blue)",
      "Pentonic (Blue)",
      "Cello/Montex/Classmates (Blue)",
      "Biling (Blue)",
      "Fair (Blue)",
      "Te Amo (Black)",
      "Fair (Black)",
      "Pentonic (Black)"
    ],
    datasets: [
      {
        label: "5/10 Rupees Pens",
        data: [16, 7, 4, 9, 9, 2, 13, 5, 2],
        backgroundColor: "#60a5fa",
        borderRadius: 10,
      },
    ],
  };

  const comparisonData = {
    labels: [
      "Blue Pens (2₹)",
      "Black Pens (2₹)",
      "Blue Pens (5/10₹)",
      "Black Pens (5/10₹)"
    ],
    datasets: [
      {
        label: "Pen Count",
        data: [283, 65, 31, 20],
        backgroundColor: ["#3b82f6", "#1e3a8a", "#f97316", "#92400e"],
        borderRadius: 8,
      },
    ],
  };

  const penTypes = {
    labels: ["2 Rupees Wala", "5/10 Wala", "Reynolds TRIMAX"],
    datasets: [
      {
        data: [351, 67, 1],
        backgroundColor: ["#1e40af", "#0ea5e9", "#facc15"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center animate-fade-in">Pen Collection Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg animate-slide-up">
          <h2 className="text-xl font-semibold mb-2">2 Rupees Pens Breakdown</h2>
          <Bar data={twoRupeesData} options={{ responsive: true }} />
        </div>
        <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg animate-slide-up">
          <h2 className="text-xl font-semibold mb-2">Pen Types Distribution</h2>
          <Doughnut data={penTypes} options={{ responsive: true }} />
        </div>
        <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg animate-slide-up">
          <h2 className="text-xl font-semibold mb-2">5/10 Rupees Pens Breakdown</h2>
          <Bar data={fiveTenData} options={{ responsive: true, indexAxis: 'y' }} />
        </div>
        <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg animate-slide-up">
          <h2 className="text-xl font-semibold mb-2">Comparison: 2₹ vs 5/10₹ Pens</h2>
          <Bar data={comparisonData} options={{ responsive: true }} />
        </div>
        <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg text-center animate-fade-in">
          <h2 className="text-xl font-semibold mb-2">TOTAL PENS</h2>
          <p className="text-6xl font-bold text-yellow-400">419</p>
        </div>
      </div>
      <PenPredictionChart />
    </div>
  );
};

export default PenDashboard;