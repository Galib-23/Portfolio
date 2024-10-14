import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClickDashboard = () => {
  const [data, setData] = useState({
    clicks: [],
    totalClicks: 0,
    uniqueClickUsers: 0,
    mostRecentClick: null,
  });

  const formatDateTime = (dateStr) => {
    if (!dateStr) {
      return "Null";
    }
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}, ${hours}:${minutes}`;
    return formattedDate;
  };

  useEffect(() => {
    const fetchClickStats = async () => {
      try {
        const response = await fetch(
          "https://p-server-mu.vercel.app/api/get-clicks",
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching click stats:", error);
      }
    };

    fetchClickStats();
  }, []);

  return (
    <div className="max-w-4xl mx-2 md:mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 flex flex-col">
        Click User Statistics
        <Link
          to="/galib/dashboard-stats"
          className="text-sm underline text-blue-600 cursor-pointer"
        >
          Visitor Stats
        </Link>
        <Link to="/" className="text-sm underline text-blue-600 cursor-pointer">
          Home
        </Link>
      </h2>
      <div className="mb-6">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Total Clicks:</span>{" "}
          {data.totalClicks}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Total Unique Click Users:</span>{" "}
          {data.uniqueClickUsers}
        </p>
        {data.mostRecentClick && (
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Most Recent Click IP:</span>{" "}
            {data.mostRecentClick.ip}, Timestamp:{" "}
            {new Date(data.mostRecentClick.timestamp).toLocaleString()}
          </p>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Click User Data:
      </h3>
      <ul className="bg-gray-100 rounded-lg p-4 space-y-2">
        {data.clicks.map((click) => (
          <li key={click._id} className="p-2 bg-white rounded-lg shadow">
            <div className="space-y-1">
              <p className="font-medium text-cyan-800">
                <span className="font-bold">IP: </span> {click.ip}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Location:</span> {click.location}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">User Agent:</span> {click.userAgent}
              </p>
              <p className="text-gray-700 text-xs break-words">
                <span className="font-bold">First Visit:</span>{" "}
                <span className="text-purple-600">
                  {click.updatedAt
                    ? formatDateTime(click.createdAt)
                    : "Not known"}
                </span>
              </p>
              <p className="text-gray-700 text-xs break-words">
                <span className="font-bold">Last Visit:</span>{" "}
                <span className="text-teal-600">
                  {click.updatedAt
                    ? formatDateTime(click.updatedAt)
                    : "Not known"}
                </span>
              </p>
            </div>
            <p className="bg-blue-500 text-white rounded-full px-3 py-1 mt-2 w-fit">
              <span className="font-bold">Click Count: </span>
              {click.clickCount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClickDashboard;
