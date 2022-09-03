import data from "./data.json" assert { type: "json" };

const canvas = document.getElementById("bar-chart");

const chartData = data.map((item) => item.amount);
const chartLabel = data.map(
  (item) => item.day.slice(0, 1).toUpperCase() + item.day.slice(1)
);

const barChart = new Chart(canvas, {
  type: "bar",
  data: {
    labels: chartLabel,
    datasets: [
      {
        data: chartData,
        backgroundColor: ["hsl(10, 79%, 65%)"],
        borderRadius: {
          topLeft: 7,
          topRight: 7,
        },
        hoverBackgroundColor: "hsl(186, 34%, 60%,0.5)",
        color: "hsl(0, 100%, 100%)",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        xAlign: "center",
        yAlign: "top",
        backgroundColor: "hsl(25, 47%, 15%)",
        titleColor: "hsl(33, 100%, 98%)",
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});
