import { useEffect, useState } from 'react';

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
                const response = await fetch('http://localhost:5000/api/visitor-stats');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching visitor stats:', error);
            }
        };

        fetchVisitorStats();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Visitor Statistics</h2>
            <div className="mb-6">
                <p className="text-lg">
                    <span className="font-semibold">Total Visitors:</span> {data.totalVisitors}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Total Unique Visitors:</span> {data.uniqueVisitors}
                </p>
                {data.mostViewedVisitor && (
                    <p className="text-lg">
                        <span className="font-semibold">Most Viewed Visitor IP:</span> {data.mostViewedVisitor.ip}, 
                        View Count: {data.mostViewedVisitor.viewCount}
                    </p>
                )}
            </div>

            <h3 className="text-xl font-semibold mb-2">Visitor Data:</h3>
            <ul className="bg-gray-100 rounded-lg p-4 space-y-2">
                {data.visitors.map(visitor => (
                    <li key={visitor._id} className="p-2 bg-white rounded-lg shadow">
                        <div className='space-y-1'>
                            <p className="font-medium">IP: {visitor.ip}</p>
                            <p className="text-gray-700">Location: {visitor.location}</p>
                            <p className="text-gray-600">User Agent: {visitor.userAgent}</p>
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
