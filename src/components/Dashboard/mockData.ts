import { months } from "@/helper/util";

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Transactions",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartIndustryData = {
  labels: ["Finance", "Defence", "Tech"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [300, 50, 100],
      backgroundColor: ["rgb(10, 139, 30)", "rgb(12, 27, 16)", "rgb(89, 86, 86)"],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartUserData = {
  labels: ["Level 1", "Level 2", "Level 3"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [50, 100, 200],
      backgroundColor: ["rgb(10, 139, 30)", "rgb(12, 27, 16)", "rgb(89, 86, 86)"],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartCompanyData = {
  labels: ["XGV", "RLK", "AVC"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [350, 20, 70],
      backgroundColor: ["rgb(10, 139, 30)", "rgb(12, 27, 16)", "rgb(89, 86, 86)"],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartStakeholderData = {
  labels: ["UFH", "ALC", "QYE"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [270, 80, 100],
      backgroundColor: ["rgb(10, 139, 30)", "rgb(12, 27, 16)", "rgb(89, 86, 86)"],
      hoverOffset: 4,
    },
  ],
};