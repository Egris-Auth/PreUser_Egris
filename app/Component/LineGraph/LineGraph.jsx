"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sign Up",
        data: [68, 48, 50, 29, 86, 67],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        pointStyle: "circle",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: "Log Out",
        data: [35, 29, 20, 51, 26, 35],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointStyle: "circle",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',         
                boxWidth: 4, // Circle size width
                boxHeight: 4, // Circle size height (Chart.js v4 supports this)
                padding: 20,   // Padding around each legend item (creates visual margin)
            },
            position: "bottom",
        },
      title: {
        display: false,
      },
      layout: {
        padding: {
          top: 22, // Adds margin above the chart area including legend
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}