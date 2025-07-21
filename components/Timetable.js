import React from "react";
import "./Timetable.css";

const Timetable = ({ schedule }) => {
  return (
    <div className="timetable">
      <h2>School Timetable</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Subject</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
              <td>{entry.subject}</td>
              <td>{entry.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
