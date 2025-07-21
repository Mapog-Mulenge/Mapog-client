import React, { useEffect, useState } from "react";
import axios from "axios";

const AnalyticsDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/analytics");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Analytics Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Event</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Metadata</th>
              <th className="p-2 border">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-2 border">{event.event}</td>
                <td className="p-2 border">{event.user?.email || "N/A"}</td>
                <td className="p-2 border">
                  <pre>{JSON.stringify(event.metadata, null, 2)}</pre>
                </td>
                <td className="p-2 border">{new Date(event.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
