import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from 'recharts';
import ReactApexChart from 'react-apexcharts';
import styles from '../../../pages/Group Report/index.module.css';
import './globalApexChartStyles.css';

const barChartData = [
  { name: 'Jan', income: 2000, outcome: 4000, amt: 1000 },
  { name: 'Feb', income: 1200, outcome: 3098, amt: 2210 },
  { name: 'Mar', income: 2000, outcome: 5000, amt: 2290 },
  { name: 'Apr', income: 5000, outcome: 9008, amt: 2000 },
  { name: 'May', income: 4090, outcome: 8000, amt: 2181 },
  { name: 'Jun', income: 7000, outcome: 9500, amt: 2500 },
  { name: 'Jul', income: 8000, outcome: 9000, amt: 2100 },
];

const pieChartData = [
  { name: 'Income', value: 55 },
  { name: 'Outcome', value: 20 },
];

const areaChartData = [
  { name: 'Apr', value: 4000, pv: 2400, amt: 2400 },
  { name: 'May', value: 3000, pv: 1398, amt: 2210 },
  { name: 'Jun', value: 2000, pv: 9800, amt: 2290 },
  { name: 'Jul', value: 6780, pv: 3908, amt: 2000 },
  { name: 'Aug', value: 5090, pv: 4800, amt: 2181 },
  { name: 'Sep', value: 4090, pv: 3800, amt: 2500 },
  { name: 'Oct', value: 3090, pv: 4300, amt: 2100 },
  { name: 'Nov', value: 4090, pv: 4300, amt: 2100 },
  { name: 'Dec', value: 5090, pv: 4300, amt: 2100 },
];

const COLORS = ['#64CFF6', '#6359E9'];

const getTotalValue = (data) => data.reduce((acc, item) => acc + item.value, 0);
const totalValue = getTotalValue(pieChartData);
const getPercentage = (value) => ((value / totalValue) * 100).toFixed(2);

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [55, 20], // Only "Income" and "Outcome" values
      options: {
        chart: {
          width: 400,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          position: 'bottom',
          formatter: (val, opts) => {
            const total = this.state.series.reduce((acc, curr) => acc + curr, 0);
            const percentage = ((opts.w.globals.series[opts.seriesIndex] / total) * 100).toFixed(2);
            const labels = ['Income', 'Outcome'];
            return `${labels[opts.seriesIndex]} - ${percentage}%`;
          },
        },
        colors: ['#64CFF6', '#661EFF'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width={350}
          />
        </div>
      </div>
    );
  }
}

const Charts = () => {
  return (
    <div className={styles.mainChartContainer}>
      <div className={styles.barGraphContainer}>
        <div className={styles.header}>
          <p>Analytics</p>
          <select name="" id="" className={styles.yearDropDown}>
            <option value="">2020</option>
            <option value="">2021</option>
            <option value="">2022</option>
            <option value="">2023</option>
          </select>
        </div>
        <div className={styles.barGraph}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={barChartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              barCategoryGap="30%"
              barSize="10"
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8C89B4" domain={[0, 10000]} />
              <YAxis yAxisId="right" orientation="right" stroke="none" domain={[0, 10000]} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="income" fill="#64CFF6" radius={[10, 10, 0, 0]} />
              <Bar yAxisId="right" dataKey="outcome" fill="#6359E9" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.halfPieChartContainer}>
        <div className={styles.header}>
          <p>Activity</p>
          <select name="" id="" className={styles.yearDropDown}>
            <option value="">Month</option>
            <option value="">Jan</option>
            <option value="">Feb</option>
            <option value="">Mar</option>
            <option value="">Apr</option>
            <option value="">May</option>
            <option value="">Jun</option>
            <option value="">Jul</option>
          </select>
        </div>
        <div className={styles.pieChart}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width="100%" height="100%">
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={pieChartData}
                cx="45%"
                cy="70%"
                outerRadius={80}
                label={(entry) => `${getPercentage(entry.value)}%`} // Show only percentage
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend formatter={(value, entry) => `${entry.payload.name} - ${getPercentage(entry.payload.value)}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.areaChartContainer}>
        <div className={styles.header}>
          <p>Daily Transactions</p>
          <select name="" id="" className={styles.yearDropDown}>
            <option value="">2020</option>
            <option value="">2021</option>
            <option value="">2022</option>
            <option value="">2023</option>
            <option value="">2024</option>
          </select>
        </div>
        <div className={styles.areaChart}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={areaChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
                  <stop offset="100%" stopColor="#1352F1" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1352F1"
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.donutChartMainContainer}>
        <div className={styles.header}>
          <p>Activity</p>
          <select name="" id="" className={styles.yearDropDown}>
            <option value="">Month</option>
            <option value="">Jan</option>
            <option value="">Feb</option>
            <option value="">Mar</option>
            <option value="">Apr</option>
          </select>
        </div>
        <div className={styles.chartContainer}>
          <ApexChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
