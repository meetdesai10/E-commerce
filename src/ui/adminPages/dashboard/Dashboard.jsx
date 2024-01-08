import React from "react";
import DashBoardHeader from "./dashboardHeader/DashBoardHeader";
import Chart from "./chart/Chart";
import { userData } from "../../../data/DashboaedData";
export default function Dashboard() {
  return (
    <div className="ps-5 pe-5">
      <DashBoardHeader />
      <Chart grid={true} data={userData} />
    </div>
  );
}
