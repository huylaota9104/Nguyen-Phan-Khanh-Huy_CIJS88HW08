import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

const getDayName = (date) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
};
const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const currentDayName = getDayName(currentDate);
  return (
    <div className="window-calendar">
      <div className="header"></div>
      <div className="clock">Thời Gian Hiện Tại:{currentDate.toLocaleTimeString()}</div>
      <Calendar value={currentDate} />
      <div className="footer"></div>
    </div>
  );
};

export default App;
