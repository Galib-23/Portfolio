import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState({
    visitors: [],
    totalVisitors: 0,
    uniqueVisitors: 0,
    mostViewedVisitor: null,
  });

  useEffect(() => {
    const fetchVisitorStats = async () => {
      try {
        const response = await fetch(
          "https://p-server-mu.vercel.app/api/visitor-stats",
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching visitor stats:", error);
      }
    };
    fetchVisitorStats();
  }, []);

  return (
      <div className="max-w-4xl md:mx-auto mt-10 p-6 bg-white shadow-md rounded-lg mx-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-700 flex flex-col">
          Visitor Statistics
          <Link to='/galib/click-users' className="text-sm underline text-blue-600 cursor-pointer">Click Stats</Link>
          <Link to='/' className="text-sm underline text-blue-600 cursor-pointer">Home</Link>
        </h2>
        <div className="mb-6">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Total Visitors:</span>{" "}
            {data.totalVisitors}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Total Unique Visitors:</span>{" "}
            {data.uniqueVisitors}
          </p>
          {data.mostViewedVisitor && (
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Most Viewed Visitor IP:</span>{" "}
              {data.mostViewedVisitor.ip},
              <span className="font-semibold"> View Count:</span>{" "}
              {data.mostViewedVisitor.viewCount}
            </p>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Visitor Data:
        </h3>
        <ul className="bg-gray-100 rounded-lg p-4 space-y-2">
          {data.visitors.map((visitor) => (
            <li key={visitor._id} className="p-2 bg-white rounded-lg shadow">
              <div className="space-y-1">
                <p className="font-medium text-cyan-800">
                  <span className="font-bold">IP: </span> {visitor.ip}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Location:</span>{" "}
                  {visitor.location}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">User Agent:</span>{" "}
                  {visitor.userAgent}
                </p>
              </div>
              <p className="bg-blue-500 text-white rounded-full px-3 py-1 mt-2 w-fit">
                Views: {visitor.viewCount}
              </p>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Dashboard;
