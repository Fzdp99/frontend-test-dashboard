import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Diagram() {
  const data = {
    labels: ["Done", "In progres", "To do"],
    datasets: [
      {
        label: "Analytics",
        data: [60, 20, 20],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut data={data} />;
}

export default Diagram;
