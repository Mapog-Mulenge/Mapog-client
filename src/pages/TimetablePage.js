import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import Timetable from "../components/Timetable";

const TimetablePage = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchData("/schools/timetable")
      .then((data) => setSchedule(data))
      .catch((err) => console.error("Failed to load timetable:", err));
  }, []);

  return (
    <div className="page">
      <h1>School Timetable</h1>
      <Timetable schedule={schedule} />
    </div>
  );
};

export default TimetablePage;
