import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsBagHeart,
} from "react-icons/bs";
import { Chart } from "react-google-charts";
import FaBalanceScaleLeft from "react-icons/fa";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Home = () => {
  const data = [
    ["Language", "Speakers (in millions)"],
    ["Assamese", 13],
    ["Bengali", 83],
    ["Bodo", 1.4],
    ["Dogri", 2.3],
    ["Gujarati", 46],
    ["Hindi", 300],
    ["Kannada", 38],
    ["Kashmiri", 5.5],
    ["Konkani", 5],
    ["Maithili", 20],
    ["Malayalam", 33],
    ["Manipuri", 1.5],
    ["Marathi", 72],
    ["Nepali", 2.9],
    ["Oriya", 33],
    ["Punjabi", 29],
    ["Sanskrit", 0.01],
    ["Santhali", 6.5],
    ["Sindhi", 2.5],
    ["Tamil", 61],
    ["Telugu", 74],
    ["Urdu", 52],
  ];
  const pie = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const options = {
    title: "Indian Language Use",
    legend: "none",
    pieSliceText: "label",
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };
  return (
    <main className="main-container">
      {/* <div className="main-title">
        <h3>DASHBOARD</h3>
      </div> */}
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <div style={{ padding: "10px" }}>
              <GiReceiveMoney
                className="card_icon"
                style={{ color: "#00a644" }}
              />
            </div>
            <div>
              <p
                style={{
                  color: "rgb(183 183 183)",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Earnings
              </p>
              <p style={{ fontWeight: "bold" }}>$98K</p>
              <span style={{ color: "#00a644", fontWeight: "bold" }}>
                <AiOutlineArrowUp />
                37.8%
              </span>{" "}
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div style={{ padding: "10px" }}>
              <BsFillGrid3X3GapFill
                className="card_icon2"
                style={{ color: "#a505ff" }}
              />
            </div>
            <div>
              <p
                style={{
                  color: "rgb(183 183 183)",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Orders
              </p>
              <p style={{ fontWeight: "bold" }}>$98K</p>
              <span style={{ color: "red", fontWeight: "bold" }}>
                <AiOutlineArrowDown />
                37.8%
              </span>{" "}
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div style={{ padding: "10px" }}>
              <i
                class="fa-solid fa-scale-balanced card_icon3"
                style={{ color: "#0455bf" }}
              ></i>
            </div>
            <div>
              <p
                style={{
                  color: "rgb(183 183 183)",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Balance
              </p>
              <p style={{ fontWeight: "bold" }}>$98K</p>
              <span style={{ color: "red", fontWeight: "bold" }}>
                <AiOutlineArrowDown />
                37.8%
              </span>{" "}
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div style={{ padding: "10px" }}>
              <BsBagHeart className="card_icon4" style={{ color: "#db0e11" }} />
            </div>
            <div>
              <p
                style={{
                  color: "rgb(183 183 183)",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Total Sales
              </p>
              <p style={{ fontWeight: "bold" }}>$98K</p>
              <span style={{ color: "#00a644", fontWeight: "bold" }}>
                <AiOutlineArrowUp />
                37.8%
              </span>{" "}
              this month
            </div>
          </div>
        </div>
      </div>
      <div className="charts">
        <div width="100%" height="100%" className="chart-card">
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={pie}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Chart
          width="100%"
          height="100%"
          chartType="PieChart"
          data={data}
          options={options}
        />
      </div>
    </main>
  );
};

export default Home;
