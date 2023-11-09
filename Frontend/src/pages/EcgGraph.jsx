import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const EcgGraph = ({ data }) => {
  const options = {
    animations: false,
    scales: {
      x: {
        type: 'linear',
        display: false,
      },
      y: {
        type: 'linear',
        min: -2,
        max: 2,
      },
    },
    elements: {
      line: {
        tension: 0.1,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const chartData = {
    datasets: [
      {
        label: 'ECG',
        data: data,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
      },
    ],
  };

  return <Line data={chartData} options={options} />;
};

// Component to generate synthetic ECG data and render the EcgGraph
const EcgGraphContainer = () => {
  const [ecgData, setEcgData] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Generate a simple sine wave
      const nextValue = Math.sin(index);
      setEcgData((currentData) => [
        ...currentData,
        { x: index, y: nextValue },
      ]);
      index += 0.1;
      if (index > 2 * Math.PI) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <EcgGraph data={ecgData} />;
};

export default EcgGraphContainer;
