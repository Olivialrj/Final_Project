import { useEffect, useState } from "react";
import { mockTrends, mockPopularTopics } from "../../../utils/constants";
import Divider from "@mui/material/Divider";
import CardGrid from "../CardGrid/CardGrid";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import "./Dashboard.css";

function Dashboard({ cards, setCards }) {
  const [apiCalls, setApiCalls] = useState(0);
  const [topTopics, setTopTopics] = useState([]);
  const [trends, setTrends] = useState([]);

  // Simulated metric tracking (you can integrate with real API data)
  //   useEffect(() => {
  //     // Fetch from localStorage or real API metrics
  //     const storedCalls = localStorage.getItem("apiCalls");
  //     setApiCalls(storedCalls ? Number(storedCalls) : 0);

  //     const storedTrends = JSON.parse(localStorage.getItem("trends") || "[]");
  //     setTrends(storedTrends);

  //     const storedTopics = JSON.parse(localStorage.getItem("topics") || "{}");
  //     setPopularTopics(storedTopics);
  //   }, []);

  // Simulate fetching usage data
  useEffect(() => {
    // Calculate total API calls from the mock data
    const totalCalls = mockTrends.reduce((sum, day) => sum + day.calls, 0);
    setApiCalls(totalCalls);

    // Sort and set top topics
    const sortedTopics = Object.entries(mockPopularTopics)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3); // Get top 3 topics
    setTopTopics(sortedTopics);

    // Set the trend data
    setTrends(mockTrends);
  }, []);

  return (
    <section className="dashboard">
      <div className="dashboard__cards">
        <h2>News Dashboard</h2>
        <CardGrid cards={cards} setCards={setCards} />
      </div>
      <Divider />
      <div className="dashboard__insights">
        <h2>News Insights</h2>

        <div className="dashboard__metrics">
          <p>
            Total Search: <strong>{apiCalls}</strong>
          </p>
        </div>

        <div className="dashboard__charts">
          <div className="chart">
            <h3>Trending Topics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={Object.entries(mockPopularTopics).map(
                  ([name, count]) => ({
                    name,
                    count,
                  })
                )}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <h3> Usage Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trends}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="calls" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
