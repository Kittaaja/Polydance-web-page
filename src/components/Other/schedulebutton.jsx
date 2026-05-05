import { Link } from "react-router-dom";
import "./button.css";

function ScheduleButton() {
  return (
    <Link to="/teacher" className="schedule-button h4">
      VIEW SCHEDULE
    </Link>
  )
}

export default ScheduleButton
