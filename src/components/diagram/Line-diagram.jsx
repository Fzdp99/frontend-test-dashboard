import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Diagram() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: "",
        data: [0, 20, 10, 90, 30, 50],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <div className="w-9/12">
      <Line options={options} data={data} />
    </div>
  );
}

export default Diagram;
