// Line Chart: User Signups
const lineChartCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineChartCtx, {
  type: "line",
  data: {
    labels: ["July", "August", "September", "October"],
    datasets: [
      {
        label: "Basic",
        data: [100, 200, 150, 300],
        borderColor: "#ff7e5f",
        backgroundColor: "rgba(255, 126, 95, 0.2)",
        tension: 0.4,
      },
      {
        label: "Premium",
        data: [200, 300, 250, 400],
        borderColor: "#feb47b",
        backgroundColor: "rgba(254, 180, 123, 0.2)",
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true, labels: { color: "#ffffff" } },
    },
    scales: {
      x: { ticks: { color: "#ffffff" } },
      y: { ticks: { color: "#ffffff" } },
    },
  },
});

// Pie Chart: Revenue by City
const pieChartCtx = document.getElementById("pieChart").getContext("2d");
new Chart(pieChartCtx, {
  type: "pie",
  data: {
    labels: ["Lagos", "Abuja", "Benin"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#ff7e5f", "#feb47b", "#90affb"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true, labels: { color: "#ffffff" } },
    },
  },
});

// Bar Chart: Orders by City
const barChartCtx = document.getElementById("barChart").getContext("2d");
new Chart(barChartCtx, {
  type: "bar",
  data: {
    labels: ["July", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Lagos",
        data: [20, 30, 40, 35, 50],
        backgroundColor: "#ff7e5f",
      },
      {
        label: "Abuja",
        data: [15, 25, 35, 30, 45],
        backgroundColor: "#feb47b",
      },
      {
        label: "Benin",
        data: [10, 20, 30, 25, 40],
        backgroundColor: "#90affb",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true, labels: { color: "#ffffff" } },
    },
    scales: {
      x: { ticks: { color: "#ffffff" } },
      y: { ticks: { color: "#ffffff" } },
    },
  },
});
