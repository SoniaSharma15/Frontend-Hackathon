import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  annotationPlugin
);

const projectData = [
  { label: 'Project 1', value: 549, type: 'New build', status: 'Complete' },
  { label: 'Project 2', value: 278, type: 'Refurbishment', status: 'Estimate' },
  { label: 'Project 3', value: 875, type: 'New build', status: 'Complete' },
  { label: 'Project 4', value: 617, type: 'New build', status: 'Estimate' },
  { label: 'Project 5', value: 506, type: 'Refurbishment', status: 'Complete' },
  { label: 'Project 6', value: 36,  type: 'Refurbishment', status: 'Complete' },
  { label: 'Project 7', value: 185, type: 'New build', status: 'Estimate' },
  { label: 'Project 8', value: 191, type: 'New build', status: 'Estimate' },
  { label: 'Project 9', value: 122, type: 'Refurbishment', status: 'Complete' },
  { label: 'Project 10', value: 881, type: 'New build', status: 'Estimate' },
  { label: 'Project 11', value: 550, type: 'Refurbishment', status: 'Complete' },
  { label: 'Project 12', value: 539, type: 'New build', status: 'Complete' },
  { label: 'Project 13', value: 82,  type: 'Refurbishment', status: 'Complete' },
  { label: 'Project 14', value: 44,  type: 'Refurbishment', status: 'Complete' },
  { label: 'Project 15', value: 109, type: 'New build', status: 'Complete' },
  { label: 'Project 16', value: 106, type: 'New build', status: 'Complete' },
  { label: 'Project 17', value: 269, type: 'Refurbishment', status: 'Estimate' },
  { label: 'Project 18', value: 29,  type: 'Refurbishment', status: 'Complete' },
  { label: 'Project 19', value: 607, type: 'New build', status: 'Estimate' },
  { label: 'Project 20', value: 528, type: 'New build', status: 'Complete' }
];
const EmbodiedCarbonChart = () => {
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = projectData.filter(p => {
    const typeMatch = typeFilter === 'All' || p.type === typeFilter;
    const statusMatch = statusFilter === 'All' || p.status === statusFilter;
    return typeMatch && statusMatch;
  });

  const data = {
    labels: filtered.map(p => p.label),
    datasets: [
      {
        label: 'Embodied Carbon (kgCO₂e/m²)',
        data: filtered.map(p => p.value),
        backgroundColor: 'rgba(150, 75, 0, 0.7)',
        borderColor: 'rgba(101, 54, 0, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Embodied Carbon Emissions by Project'
      },
      legend: {
        display: true
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#000',
        font: { weight: 'bold' }
      },
      annotation: {
        annotations: {
          target2025: {
            type: 'line',
            yMin: 600,
            yMax: 600,
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              content: '2025 Target (600)',
              enabled: true,
              position: 'end'
            }
          },
          target2030: {
            type: 'line',
            yMin: 500,
            yMax: 500,
            borderColor: 'green',
            borderDash: [6, 6],
            borderWidth: 2,
            label: {
              content: '2030 Target (500)',
              enabled: true,
              position: 'end'
            }
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'kgCO₂e/m²'
        },
        ticks: {
          stepSize: 100
        }
      }
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label>Type:&nbsp;</label>
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Refurbishment">Refurbishment</option>
            <option value="New build">New build</option>
          </select>
        </div>
        <div>
          <label>Status:&nbsp;</label>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Estimate">Estimate</option>
          </select>
        </div>
      </div>
      <div style={{ width: '100%', height: '60vh', overflowX: 'auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default EmbodiedCarbonChart;