import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { CHART_CONFIGS } from '../data/charts';

Chart.register(...registerables);

export default function ChartWidget({ id }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const config = CHART_CONFIGS[id];
    if (!config || !canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [id]);

  return (
    <div className="chart-container">
      <canvas ref={canvasRef} id={id} />
    </div>
  );
}
