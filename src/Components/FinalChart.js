import { useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import "./FinalChart.css";

function Finalchart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  return (
    <div className="App"> 
      <div  className="line">
        <LineChart chartData={userData} />
      </div>
      <div  className="pie">
        <PieChart chartData={userData} />
      </div>
    </div>
  )
}

export default Finalchart