import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import "./DashBoard.scss";
import { Tooltip } from "react-bootstrap";
import { getOverview } from "../../services/apiServices";
import { useEffect, useState } from "react";
const DashBoard = (props) => {
  const [dataOverView, setDataOverView] = useState([]);

  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetchDataOverView();
  }, []);

  const fetchDataOverView = async () => {
    let res = await getOverview();
    if (res && res.EC === 0) {
      setDataOverView(res.DT);
      //process chart data
      let Qz = 0;
      let Qs = 0;
      let As = 0;
      Qz = res?.DT?.others?.countQuiz ?? 0;
      Qs = res?.DT?.others?.countQuestions ?? 0;
      As = res?.DT?.others?.countAnswers ?? 0;
      const data = [
        {
          name: "Quizzes",
          Qz: Qz,
        },
        {
          name: "Questions",
          Qs: Qs,
        },
        {
          name: "Answers",
          As: As,
        },
      ];
      setDataChart(data);
    }
    console.log(">>> check res : ", res);
  };

  const renderCustomAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#666"
          transform="rotate(0)"
        >
          {payload.value}
        </text>
      </g>
    );
  };
  return (
    <div className="dashboard-Container">
      <div className="title"> Analytics dashboard</div>
      <div className="content">
        <div className="c-left">
          <div className="child">
            <span className="text-1">Total users</span>
            <span className="text-2">
              {dataOverView &&
              dataOverView.users &&
              dataOverView.users.total ? (
                <>{dataOverView.users.total}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Quizzes</span>
            <span className="text-2">
              {" "}
              {dataOverView &&
              dataOverView.others &&
              dataOverView.others.countQuiz ? (
                <>{dataOverView.others.countQuiz}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Questions</span>
            <span className="text-2">
              {" "}
              {dataOverView &&
              dataOverView.others &&
              dataOverView.others.countQuestions ? (
                <>{dataOverView.others.countQuestions}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Answers</span>
            <span className="text-2">
              {dataOverView &&
              dataOverView.others &&
              dataOverView.others.countAnswers ? (
                <>{dataOverView.others.countAnswers}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
        </div>
        <div className="c-right">
          <ResponsiveContainer width={"95%"} height={"100%"}>
            <BarChart data={dataChart}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" tick={renderCustomAxisTick} />
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="Qz" fill="#8884d8" />
              <Bar dataKey="Qs" fill="#82ca9d" />
              <Bar dataKey="As" fill="#fcb12a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
