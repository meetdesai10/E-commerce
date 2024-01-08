import React from "react";
import "./chart.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { userData } from "../../../../data/DashboaedData";
export default function Chart({ grid, data }) {
  return (
    <>
      <div className="chart">
        <h3 className="chartTitle">User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {grid && <CartesianGrid strokeDasharray="5 5" />}
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={"Active_User"}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
